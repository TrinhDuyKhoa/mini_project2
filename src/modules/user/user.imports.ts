import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './../../entities/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

export const modules = [TypeOrmModule.forFeature([UserEntity])];

export const providers = [UserService];

export const controllers = [UserController];

export const exps = [UserService];
