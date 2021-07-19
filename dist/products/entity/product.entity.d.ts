import { User } from "src/users/entity/users.entity";
import { Comment } from "./comment.entity";
export declare class Product {
    id: number;
    price: number;
    name: string;
    inStock: boolean;
    user: User;
    comments: Comment[];
}
