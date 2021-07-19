import { ApiProperty } from "@nestjs/swagger"

export class RegistreDto {
    @ApiProperty()
    username: string

    @ApiProperty()
    password: string

    @ApiProperty()
    email: string
}