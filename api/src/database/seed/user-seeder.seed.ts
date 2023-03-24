import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from '../../entity/user.entity'

export default class UserSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { username: 'Timber', password: 'Saw'},
        { username: 'Phantom', password: 'Lancer'},
      ])
      .execute()
  }
}
