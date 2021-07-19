import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/Product.dto';
import { CommentDto } from './dto/comment.dto';
import { Product } from './entity/product.entity';
import { Comment } from './entity/comment.entity';

@Injectable()
export class ProductService{
    
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
        @InjectRepository(Comment) 
        private commentRepository: Repository<Comment>
    ) {}

    async addComment(id: string, commentDto: CommentDto, user: Express.User){
        const product = await this.productsRepository.findOne(id)
        commentDto.product = product
        commentDto.user = user['user']
        await this.commentRepository.save(commentDto)
    }
    
    findAll(){
        const products = this.productsRepository.find({
            relations: ['comments', 'user']
        });
        if(!products) throw new NotFoundException()
        return products
    }

    findAllMine(user: Express.User){
        const products = this.productsRepository.find({
            where: {
             user: user['user'],
            },
            relations: ['comments', 'user']
        });
        if(!products) throw new NotFoundException()
        return products
    }

    findOne(id: string, user: Express.User) {
       const product = this.productsRepository.findOne({
           where: {
            user: user['user'],
            id: id
           },
           relations: ['comments']
       });
       if(!product){
            throw new NotFoundException();
       }
       return product
    }

    async remove(id: string, user: Express.User) {
        const product = this.findOne(id, user)
        if(!product){
            throw new NotFoundException();
        }
        const comment = this.commentRepository.findOne({where:{product: product}})
        this.commentRepository.delete((await comment).id)
        this.productsRepository.delete(id);
    }

    async create(product: ProductDto, user: Express.User): Promise<void>{
        product.user = user['user']
        await this.productsRepository.save(product)
    }

    async update(product: ProductDto, id: string, user: Express.User){
        await this.remove(id, user)
        product.id = Number(id)
        await this.productsRepository.save(product)
        return product
    }
}