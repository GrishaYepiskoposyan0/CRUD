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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const Product_dto_1 = require("./dto/Product.dto");
const product_service_1 = require("./product.service");
const swagger_1 = require("@nestjs/swagger");
const comment_dto_1 = require("./dto/comment.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    addComment(id, commentDto, req) {
        return this.productService.addComment(id, commentDto, req.user);
    }
    getAll() {
        return this.productService.findAll();
    }
    getAllMine(req) {
        return this.productService.findAllMine(req.user);
    }
    getOne(id, req) {
        return this.productService.findOne(id, req.user);
    }
    remove(id, req) {
        return this.productService.remove(id, req.user);
    }
    create(product, req) {
        return this.productService.create(product, req.user);
    }
    update(product, id, req) {
        return this.productService.update(product, id, req.user);
    }
};
__decorate([
    common_1.Post('comment/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comment_dto_1.CommentDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "addComment", null);
__decorate([
    common_1.Get('all_products'),
    swagger_1.ApiResponse({
        type: Product_dto_1.ProductDto,
        isArray: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAll", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiResponse({
        type: Product_dto_1.ProductDto,
        isArray: true
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllMine", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiResponse({
        type: Product_dto_1.ProductDto
    }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
__decorate([
    common_1.Post(''),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_dto_1.ProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiResponse({
        type: Product_dto_1.ProductDto
    }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_dto_1.ProductDto, String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
ProductController = __decorate([
    swagger_1.ApiBearerAuth(),
    common_1.Controller(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map