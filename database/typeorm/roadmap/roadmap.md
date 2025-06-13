# Documentación de TypeORM

## 1. Introducción

TypeORM es un ORM (Object-Relational Mapping) para TypeScript y JavaScript que permite trabajar con bases de datos relacionales de manera más intuitiva usando objetos y clases en lugar de consultas SQL directas.

### Características principales:

- Soporte para múltiples bases de datos (MySQL, PostgreSQL, SQLite, MongoDB, etc.)
- Decoradores para definir entidades y relaciones
- Migraciones automáticas
- Query Builder potente
- Soporte para Active Record y Data Mapper patterns
- Compatible con TypeScript y JavaScript

## 2. Instalación

```bash
# Instalación básica
npm install typeorm reflect-metadata

# Para bases de datos específicas
npm install mysql2          # MySQL
npm install pg              # PostgreSQL
npm install sqlite3         # SQLite
npm install mongodb         # MongoDB
```

## 3. Configuración inicial

### 3.1 Configuración básica (data-source.ts)

```typescript
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
```

### 3.2 Inicialización

```typescript
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));
```

## 4. Entidades

### 4.1 Definición básica de entidad

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
```

### 4.2 Tipos de columnas

```typescript
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  name: string;

  @Column("text")
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column("int")
  stock: number;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
```

### 4.3 Validaciones y restricciones

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: "user" })
  role: string;
}
```

## 5. Relaciones

### 5.1 One-to-One

```typescript
// Usuario
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;
}

// Perfil
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
```

### 5.2 One-to-Many / Many-to-One

```typescript
// Categoría (One)
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}

// Producto (Many)
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
```

### 5.3 Many-to-Many

```typescript
// Usuario
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
}

// Rol
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
```

## 6. Repositorios

### 6.1 Uso básico del Repository

```typescript
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const userRepository = AppDataSource.getRepository(User);

// Crear usuario
const user = new User();
user.firstName = "Juan";
user.lastName = "Pérez";
user.age = 25;
await userRepository.save(user);

// Buscar usuarios
const users = await userRepository.find();
const user = await userRepository.findOne({ where: { id: 1 } });

// Actualizar
await userRepository.update(1, { firstName: "Carlos" });

// Eliminar
await userRepository.delete(1);
```

### 6.2 Métodos de búsqueda

```typescript
// Buscar todos
const users = await userRepository.find();

// Buscar con condiciones
const adults = await userRepository.find({
  where: { age: MoreThan(18) },
});

// Buscar con relaciones
const usersWithProfile = await userRepository.find({
  relations: ["profile"],
});

// Buscar con selección específica
const users = await userRepository.find({
  select: ["firstName", "lastName"],
});

// Buscar con ordenamiento
const users = await userRepository.find({
  order: { firstName: "ASC" },
});

// Buscar con paginación
const users = await userRepository.find({
  skip: 10,
  take: 5,
});
```

### 6.3 Operadores de consulta

```typescript
import { Like, Between, In, MoreThan, LessThan } from "typeorm";

// LIKE
const users = await userRepository.find({
  where: { firstName: Like("%juan%") },
});

// BETWEEN
const users = await userRepository.find({
  where: { age: Between(18, 65) },
});

// IN
const users = await userRepository.find({
  where: { id: In([1, 2, 3, 4]) },
});

// Mayor que
const users = await userRepository.find({
  where: { age: MoreThan(18) },
});
```

## 7. Query Builder

### 7.1 Uso básico

```typescript
const users = await AppDataSource.getRepository(User)
  .createQueryBuilder("user")
  .where("user.age > :age", { age: 18 })
  .getMany();
```

### 7.2 Consultas complejas

```typescript
const result = await AppDataSource.getRepository(User)
  .createQueryBuilder("user")
  .leftJoinAndSelect("user.profile", "profile")
  .leftJoinAndSelect("user.roles", "roles")
  .where("user.age BETWEEN :minAge AND :maxAge", {
    minAge: 18,
    maxAge: 65,
  })
  .andWhere("roles.name = :roleName", { roleName: "admin" })
  .orderBy("user.firstName", "ASC")
  .skip(0)
  .take(10)
  .getMany();
```

### 7.3 Agregaciones

```typescript
// Contar
const count = await userRepository.createQueryBuilder("user").where("user.age > :age", { age: 18 }).getCount();

// Suma
const totalAge = await userRepository.createQueryBuilder("user").select("SUM(user.age)", "sum").getRawOne();

// Agrupar
const ageGroups = await userRepository
  .createQueryBuilder("user")
  .select("user.age")
  .addSelect("COUNT(*)", "count")
  .groupBy("user.age")
  .getRawMany();
```

## 8. Migraciones

### 8.1 Generar migración

```bash
npx typeorm migration:generate ./src/migration/CreateUser -d ./src/data-source.ts
```

### 8.2 Ejecutar migraciones

```bash
npx typeorm migration:run -d ./src/data-source.ts
```

### 8.3 Revertir migración

```bash
npx typeorm migration:revert -d ./src/data-source.ts
```

### 8.4 Ejemplo de migración

```typescript
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1234567890123 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "firstName",
            type: "varchar",
            length: "100",
          },
          {
            name: "lastName",
            type: "varchar",
            length: "100",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
```

## 9. Transacciones

### 9.1 Usando QueryRunner

```typescript
const queryRunner = AppDataSource.createQueryRunner();

await queryRunner.connect();
await queryRunner.startTransaction();

try {
  const user = new User();
  user.firstName = "Juan";
  await queryRunner.manager.save(user);

  const profile = new Profile();
  profile.bio = "Desarrollador";
  profile.user = user;
  await queryRunner.manager.save(profile);

  await queryRunner.commitTransaction();
} catch (err) {
  await queryRunner.rollbackTransaction();
  throw err;
} finally {
  await queryRunner.release();
}
```

### 9.2 Usando transaction manager

```typescript
await AppDataSource.transaction(async (manager) => {
  const user = new User();
  user.firstName = "Juan";
  await manager.save(user);

  const profile = new Profile();
  profile.bio = "Desarrollador";
  profile.user = user;
  await manager.save(profile);
});
```

## 10. Validaciones

### 10.1 Usando class-validator

```bash
npm install class-validator class-transformer
```

```typescript
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @MinLength(2)
  firstName: string;

  @Column()
  @IsEmail()
  email: string;
}
```

## 11. Índices

```typescript
@Entity()
@Index(["firstName", "lastName"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @Index({ unique: true })
  email: string;
}
```

## 12. Listeners y Subscribers

### 12.1 Entity Listeners

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  updateDates() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
```

### 12.2 Entity Subscribers

```typescript
import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from "typeorm";
import { User } from "./User";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log("BEFORE USER INSERTED: ", event.entity);
  }
}
```

## 13. Configuraciones avanzadas

### 13.1 Configuración para producción

```typescript
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false, // ¡Nunca true en producción!
  logging: ["error"],
  entities: ["dist/entity/**/*.js"],
  migrations: ["dist/migration/**/*.js"],
  subscribers: ["dist/subscriber/**/*.js"],
  ssl: {
    rejectUnauthorized: false,
  },
});
```

### 13.2 Pool de conexiones

```typescript
export const AppDataSource = new DataSource({
  // ... otras opciones
  extra: {
    connectionLimit: 10,
    max: 10,
    min: 0,
    acquireTimeoutMillis: 60000,
    idleTimeoutMillis: 600000,
  },
});
```

## 14. Mejores prácticas

### 14.1 Estructura de proyecto

```
src/
├── entity/
│   ├── User.ts
│   └── Product.ts
├── migration/
├── repository/
│   └── UserRepository.ts
├── service/
│   └── UserService.ts
└── data-source.ts
```

### 14.2 Repository personalizado

```typescript
export class UserRepository extends Repository<User> {
  findByEmail(email: string) {
    return this.findOne({ where: { email } });
  }

  findActiveUsers() {
    return this.find({ where: { isActive: true } });
  }
}
```

### 14.3 Service layer

```typescript
export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }
}
```

## 15. Consejos y troubleshooting

### 15.1 Problemas comunes

- **synchronize: true** solo para desarrollo
- Siempre usar migraciones en producción
- Validar datos antes de guardar
- Usar transacciones para operaciones críticas
- Optimizar consultas con índices

### 15.2 Debugging

```typescript
// Habilitar logging
export const AppDataSource = new DataSource({
  // ... otras opciones
  logging: ["query", "error"],
  logger: "advanced-console",
});
```

Esta documentación cubre los aspectos fundamentales de TypeORM. Para casos específicos o funcionalidades avanzadas, consulta la documentación oficial en typeorm.io.
