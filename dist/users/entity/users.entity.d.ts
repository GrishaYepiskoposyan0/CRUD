import { Comment } from "src/products/entity/comment.entity";
import { Product } from "src/products/entity/product.entity";
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    products: Product[];
    comments: Comment[];
}
