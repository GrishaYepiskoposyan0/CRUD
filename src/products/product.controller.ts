import { Controller, Get, Param , Delete, Post, Body, Put, Req} from '@nestjs/common';
import { ProductDto } from './dto/Product.dto';
import { Request } from 'express'

import { ProductService } from './product.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CommentDto } from './dto/comment.dto';

@ApiBearerAuth()
@Controller()
export class ProductController{

    constructor(private readonly productService: ProductService) {}


    @Post('comment/:id')
    addComment(
        @Param('id') id: string,
        @Body() commentDto: CommentDto,
        @Req() req: Request
    ){
        return this.productService.addComment(id, commentDto, req.user)
    }

    @Get('all_products')
    @ApiResponse({
        type: ProductDto,
        isArray: true
    })
    getAll(){
        return this.productService.findAll()
    }

    @Get()
    @ApiResponse({
        type: ProductDto,
        isArray: true
    })
    getAllMine(@Req() req: Request){
        return this.productService.findAllMine(req.user)
    }

    @Get(':id')
    @ApiResponse({
        type: ProductDto
    })
    getOne(@Param('id') id: string, @Req() req: Request){
        return this.productService.findOne(id, req.user)
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Req() req: Request) {
        return this.productService.remove(id, req.user)
    }

    @Post('')
    create(@Body() product: ProductDto, @Req() req: Request){
        return this.productService.create(product,req.user)
    }

    @Put(':id')
    @ApiResponse({
        type: ProductDto
    })
    update(
            @Body() product: ProductDto,
            @Param('id') id: string,
            @Req() req: Request
        ){
        return this.productService.update(product, id, req.user)   
    }

}