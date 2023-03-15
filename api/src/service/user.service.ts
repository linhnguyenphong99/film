import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<any> {
    const recordsUser = await this.usersRepository.find();
    const recordsUserMap = recordsUser.map(record => {
      return {
        'firstName': record.firstName,
        'lastName' : record.lastName,
        'isActive' : record.isActive,
        'mail'     : record.mail
      }
    })
    return recordsUserMap;
  }
}
