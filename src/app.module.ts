import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entity/product.entity';
import { ProductsModule } from './products/product.module';
import { User } from './users/entity/users.entity';
import { AuthModule } from './auth/auth.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { AuthorizedMiddleware } from './middlewares/authorized.middleware';
import { ProductController } from './products/product.controller';
import { Comment } from './products/entity/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Grish098130657.a',
      database: 'product',
      entities: [Product, User, Comment],
      synchronize: true,
    }),
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthorizedMiddleware).forRoutes(ProductController)
  }
  
}