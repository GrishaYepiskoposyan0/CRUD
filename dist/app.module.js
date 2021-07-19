"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./products/entity/product.entity");
const product_module_1 = require("./products/product.module");
const users_entity_1 = require("./users/entity/users.entity");
const auth_module_1 = require("./auth/auth.module");
const authorized_middleware_1 = require("./middlewares/authorized.middleware");
const product_controller_1 = require("./products/product.controller");
const comment_entity_1 = require("./products/entity/comment.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(authorized_middleware_1.AuthorizedMiddleware).forRoutes(product_controller_1.ProductController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Grish098130657.a',
                database: 'product',
                entities: [product_entity_1.Product, users_entity_1.User, comment_entity_1.Comment],
                synchronize: true,
            }),
            product_module_1.ProductsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map