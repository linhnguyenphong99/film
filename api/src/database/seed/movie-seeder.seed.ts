import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Movie } from '../../entity/movie.entity'

export default class MovieSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Movie)
      .values([
        {
          title       : 'movie 1',
          budget      : '150000',
          homepage    : 'movie 1',
          overview    : 'movie 1',
          poppularity : 'top 1',
          release_date: new Date().toString(),
          revenue     : '1,5 milion',
          runtime     : new Date().toString(),
          status      : 'status',
          tagline     : 'hot',
          votes_avg   : '5/5',
          vote_count  : '183'
        },
        {
          title       : 'movie 2',
          budget      : '150000',
          homepage    : 'movie 1',
          overview    : 'movie 1',
          poppularity : 'top 1',
          release_date: new Date().toString(),
          revenue     : '1,5 milion',
          runtime     : new Date().toString(),
          status      : 'status',
          tagline     : 'hot',
          votes_avg   : '5/5',
          vote_count  : '183'
        },
        {
          title       : 'movie 3',
          budget      : '150000',
          homepage    : 'movie 1',
          overview    : 'movie 1',
          poppularity : 'top 1',
          release_date: new Date().toString(),
          revenue     : '1,5 milion',
          runtime     : new Date().toString(),
          status      : 'status',
          tagline     : 'hot',
          votes_avg   : '5/5',
          vote_count  : '183'
        },
      ])
      .execute()
  }
}
