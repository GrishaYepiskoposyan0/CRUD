import { User } from "src/users/entity/users.entity";
import { Product } from "./product.entity";
export declare class Comment {
    id: number;
    text: string;
    user: User;
    product: Product;
}
