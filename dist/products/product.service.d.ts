/// <reference types="passport" />
import { Repository } from 'typeorm';
import { ProductDto } from './dto/Product.dto';
import { CommentDto } from './dto/comment.dto';
import { Product } from './entity/product.entity';
import { Comment } from './entity/comment.entity';
export declare class ProductService {
    private productsRepository;
    private commentRepository;
    constructor(productsRepository: Repository<Product>, commentRepository: Repository<Comment>);
    addComment(id: string, commentDto: CommentDto, user: Express.User): Promise<void>;
    findAll(): Promise<Product[]>;
    findAllMine(user: Express.User): Promise<Product[]>;
    findOne(id: string, user: Express.User): Promise<Product>;
    remove(id: string, user: Express.User): Promise<void>;
    create(product: ProductDto, user: Express.User): Promise<void>;
    update(product: ProductDto, id: string, user: Express.User): Promise<ProductDto>;
}
