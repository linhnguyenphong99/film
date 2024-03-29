import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<any> {
    const recordsUser = await this.usersRepository.find();
    const recordsUserMap = recordsUser.map(record => {
      return {
        'firstName': record.username,
        'lastName' : record.password,
      }
    })
    return recordsUserMap;
  }

  async findOne(username: string): Promise<any> {
    return this.usersRepository.findOneBy({ username });
  }

  async create(res: User): Promise<any | undefined> {
    const query = await this.usersRepository.createQueryBuilder('user')
    .where(`user.username LIKE :value`, { value: `%${res.username}%`})
    .andWhere('user.password = :password', {password: res.password}).getMany();

    return query
  }
}
