import "dotenv/config";
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  username: process.env.POSTGRES_USER || 'nestjs_user',
  password: process.env.POSTGRES_PASSWORD || 'nestjs_pass',
  database: process.env.POSTGRES_DB || 'nestjs_demo',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
  synchronize: false,
});