import { User } from "src/users/entity/users.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Comment } from "./comment.entity";

@Entity()
export class Product{


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    price: number

    @Column()
    name: string

    @Column()
    inStock: boolean

    @ManyToOne(() => User, user => user.products)
    user: User

    @OneToMany(() => Comment, comment => comment.product)
    comments: Comment[]
}