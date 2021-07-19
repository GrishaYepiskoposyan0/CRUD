import { User } from "src/users/entity/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Comment{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @ManyToOne(() => User, user => user.comments)
    user: User

    @ManyToOne(() => Product, product => product.comments)
    product: Product

    
}