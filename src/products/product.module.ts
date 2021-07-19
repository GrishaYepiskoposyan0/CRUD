import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { Comment } from './entity/comment.entity';
import { Product } from './entity/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'sectretKey',
            signOptions: {
                expiresIn: '1d',
            },
        }),
        TypeOrmModule.forFeature([Product, Comment])
    ],
    controllers: [ProductController],
    providers: [ProductService]
    
})
export class ProductsModule{

}