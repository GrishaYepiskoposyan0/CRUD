"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entity/product.entity");
const comment_entity_1 = require("./entity/comment.entity");
let ProductService = class ProductService {
    constructor(productsRepository, commentRepository) {
        this.productsRepository = productsRepository;
        this.commentRepository = commentRepository;
    }
    async addComment(id, commentDto, user) {
        const product = await this.productsRepository.findOne(id);
        commentDto.product = product;
        commentDto.user = user['user'];
        await this.commentRepository.save(commentDto);
    }
    findAll() {
        const products = this.productsRepository.find({
            relations: ['comments', 'user']
        });
        if (!products)
            throw new common_1.NotFoundException();
        return products;
    }
    findAllMine(user) {
        const products = this.productsRepository.find({
            where: {
                user: user['user'],
            },
            relations: ['comments', 'user']
        });
        if (!products)
            throw new common_1.NotFoundException();
        return products;
    }
    findOne(id, user) {
        const product = this.productsRepository.findOne({
            where: {
                user: user['user'],
                id: id
            },
            relations: ['comments']
        });
        if (!product) {
            throw new common_1.NotFoundException();
        }
        return product;
    }
    async remove(id, user) {
        const product = this.findOne(id, user);
        if (!product) {
            throw new common_1.NotFoundException();
        }
        const comment = this.commentRepository.findOne({ where: { product: product } });
        this.commentRepository.delete((await comment).id);
        this.productsRepository.delete(id);
    }
    async create(product, user) {
        product.user = user['user'];
        await this.productsRepository.save(product);
    }
    async update(product, id, user) {
        await this.remove(id, user);
        product.id = Number(id);
        await this.productsRepository.save(product);
        return product;
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __param(1, typeorm_1.InjectRepository(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map