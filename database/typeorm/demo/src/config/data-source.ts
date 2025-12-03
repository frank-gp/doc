import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "../module/user/dtos-entities/user.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "my_db",
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [UserEntity],
    migrations: [],
    subscribers: [],
})
