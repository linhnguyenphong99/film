import { Movie } from "./src/entity/movie.entity";
import { User } from "./src/entity/user.entity";

module.exports = {
  name: "default",
  type: "postgres",
  database: process.env.DB_DATABSE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [User, Movie],
  synchronize: true,
  logging: false,
  seeds: ['src/database/seed/**/*{.ts,.js}'],
  factories: ['src/database/factory/**/*{.ts,.js}'],
}
