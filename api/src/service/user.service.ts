import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/repository/user.repository';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly userRepository: UsersRepository
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

  async findOne(username: string): Promise<any> {
    return this.usersRepository.findOneBy({ username });
  }

  async create(res: User): Promise<any | undefined> {
    const query = this.usersRepository.createQueryBuilder('user')
      .where(`user.username LIKE :value`, { value: `%${res.username}%`})
      .andWhere('user.password = :value', {value: res.password})
    return query.getMany();
  }
}
