import { CreateUserRequest } from './dto/create-user.request';
import { UsersRepository } from './users.repository';

export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async createUser(request: CreateUserRequest) {
    const user = await this.usersRepository.create(request);
    return user;
  }
}
