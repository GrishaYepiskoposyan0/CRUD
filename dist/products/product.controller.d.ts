import { ProductDto } from './dto/Product.dto';
import { Request } from 'express';
import { ProductService } from './product.service';
import { CommentDto } from './dto/comment.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addComment(id: string, commentDto: CommentDto, req: Request): Promise<void>;
    getAll(): Promise<import("./entity/product.entity").Product[]>;
    getAllMine(req: Request): Promise<import("./entity/product.entity").Product[]>;
    getOne(id: string, req: Request): Promise<import("./entity/product.entity").Product>;
    remove(id: string, req: Request): Promise<void>;
    create(product: ProductDto, req: Request): Promise<void>;
    update(product: ProductDto, id: string, req: Request): Promise<ProductDto>;
}
