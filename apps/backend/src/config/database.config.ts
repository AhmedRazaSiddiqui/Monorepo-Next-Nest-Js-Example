// import dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';

// dotenv.config({ path: '../../../../.env' });

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  // entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  // migrations: [`${__dirname}/../**/migrations/*.{ts,js}`],
  // migrationsRun: true,
  // synchronize: false,
  // logging: process.env.NODE_ENV !== 'development',
};
