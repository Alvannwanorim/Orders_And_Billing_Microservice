import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.services';

@Controller('auth/users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Post()
  async createUser(@Body() request: CreateUserRequest) {
    return this.usersServices.createUser(request);
  }
}
