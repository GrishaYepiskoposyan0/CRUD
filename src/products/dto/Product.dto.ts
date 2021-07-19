import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/entity/users.entity"

export class ProductDto{
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    price: number
    
    @ApiProperty()
    inStock: boolean

    @ApiProperty()
    user: User
}