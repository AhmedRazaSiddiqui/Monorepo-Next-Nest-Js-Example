import { UserEntity } from 'src/entities/user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post('/create')
  create(@Body() User: UserEntity) {
    return this.userService.createUser(User);
  }
}
