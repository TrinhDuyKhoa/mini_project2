import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { BlogEntity } from "../entities/blog.entity";
import { CategotyEntity } from "../entities/category.entity";
import { UserEntity } from "../entities/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";

export const typeormFactory: TypeOrmModuleAsyncOptions = {

    inject: [ConfigService],
    
    useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get("POSTGRE_HOST"),
        port: configService.get("POSTGRE_PORT"),
        username: configService.get("POSTGRE_USER"),
        password: configService.get("POSTGRE_PASSWORD"),
        database: configService.get("POSTGRE_DATABASE"),
        entities: [UserEntity, CategotyEntity, BlogEntity]
    })
        
}