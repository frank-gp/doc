import express, { Request, Response } from "express";
import { Column, DataSource, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

const app = express();

app.use(express.json());

@Entity({ name: "users_table" })
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "postgres",
  dropSchema: true, // reset database
  synchronize: true,
  logging: [/* "query", */ "error"], // display logs
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});

const UserModelRepository = AppDataSource.getRepository(UserEntity);

app.get("/users", async (req: Request, res: Response) => {
  const allUsers = await UserModelRepository.find();
  res.status(200).json(allUsers);
});

app.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundUser = await UserModelRepository.findOneBy({ id: Number(id) });
  res.status(200).json(foundUser);
});

app.post("/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = await UserModelRepository.save({ name, email });
  res.status(201).json(newUser);
});

app.put("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedUser = await UserModelRepository.update(id, { name, email });
  res.status(200).json(updatedUser);
});

app.delete("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedUser = await UserModelRepository.delete(id);
  res.status(200).json(deletedUser);
});

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
  app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
  });
});




// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new UserEntity()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(UserEntity)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
