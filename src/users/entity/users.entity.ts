import { Comment } from "src/products/entity/comment.entity";
import { Product } from "src/products/entity/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column({unique: true})
    email: string

    @OneToMany(() => Product, product => product.user)
    products: Product[]

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[]
}