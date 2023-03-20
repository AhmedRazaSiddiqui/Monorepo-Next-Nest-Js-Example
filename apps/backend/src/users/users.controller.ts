import { UsersService } from './users.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post('/create')
  create() {
    return this.userService.createUser();
  }
}
