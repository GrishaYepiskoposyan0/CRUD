import { ApiProperty } from "@nestjs/swagger"
import { Product } from '../entity/product.entity'
import { User } from 'src/users/entity/users.entity'

export class CommentDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    text: string

    @ApiProperty()
    user: User

    @ApiProperty()
    product: Product
}