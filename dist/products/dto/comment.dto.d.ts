import { Product } from '../entity/product.entity';
import { User } from 'src/users/entity/users.entity';
export declare class CommentDto {
    id: number;
    text: string;
    user: User;
    product: Product;
}
