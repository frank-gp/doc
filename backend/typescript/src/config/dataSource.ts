import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DB_TYPE } from "./envs";
import { User } from "../entities/User";

console.log("Database type: ", DB_TYPE);

export const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [],
});
