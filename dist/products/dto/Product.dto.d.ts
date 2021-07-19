import { User } from "src/users/entity/users.entity";
export declare class ProductDto {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    user: User;
}
