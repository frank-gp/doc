# Documentación de Prisma

## 1. Introducción

Prisma es un ORM de próxima generación que consiste en tres herramientas principales:

- **Prisma Client**: Cliente de base de datos auto-generado y type-safe
- **Prisma Migrate**: Sistema de migraciones declarativo
- **Prisma Studio**: GUI para visualizar y editar datos

### Características principales:

- Type-safety completo con TypeScript
- Auto-completado inteligente
- Esquema declarativo
- Migraciones automáticas
- Introspección de base de datos
- Soporte para múltiples bases de datos

## 2. Instalación

### 2.1 Instalación inicial

```bash
# Inicializar proyecto
npm init -y
npm install prisma typescript ts-node @types/node --save-dev

# Inicializar Prisma
npx prisma init
```

### 2.2 Instalar Prisma Client

```bash
npm install @prisma/client
```

### 2.3 Para bases de datos específicas

```bash
# PostgreSQL (incluido por defecto)
# MySQL
npm install mysql2

# SQLite (incluido por defecto)
# MongoDB
# SQL Server
```

## 3. Configuración inicial

### 3.1 Archivo .env

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"

# Para MySQL
# DATABASE_URL="mysql://username:password@localhost:3306/mydb"

# Para SQLite
# DATABASE_URL="file:./dev.db"
```

### 3.2 Schema.prisma básico

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 4. Esquema de Prisma (Schema)

### 4.1 Tipos de datos básicos

```prisma
model User {
  id          Int       @id @default(autoincrement())
  email       String    @unique
  name        String?   // Opcional
  age         Int
  isActive    Boolean   @default(true)
  salary      Float
  bio         String?   @db.Text
  avatar      Bytes?
  birthDate   DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

### 4.2 Atributos y modificadores

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  sku         String   @unique
  name        String   @db.VarChar(255)
  description String?  @db.Text
  price       Decimal  @db.Decimal(10, 2)
  stock       Int      @default(0)
  isActive    Boolean  @default(true)
  tags        String[] // Array de strings (PostgreSQL)

  @@map("products") // Nombre de tabla personalizado
  @@index([name])   // Índice simple
  @@index([name, isActive]) // Índice compuesto
}
```

### 4.3 Enums

```prisma
enum Role {
  USER
  ADMIN
  MODERATOR
}

enum Status {
  PENDING
  APPROVED
  REJECTED
}

model User {
  id     Int    @id @default(autoincrement())
  email  String @unique
  role   Role   @default(USER)
  status Status @default(PENDING)
}
```

## 5. Relaciones

### 5.1 One-to-One

```prisma
model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  profile Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  userId Int    @unique
  user   User   @relation(fields: [userId], references: [id])
}
```

### 5.2 One-to-Many

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  authorId Int
  author   User   @relation(fields: [authorId], references: [id])
}
```

### 5.3 Many-to-Many

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  roles Role[]
}

model Role {
  id    Int    @id @default(autoincrement())
  name  String @unique
  users User[]
}
```

### 5.4 Many-to-Many con tabla intermedia

```prisma
model User {
  id          Int           @id @default(autoincrement())
  email       String        @unique
  userRoles   UserRole[]
}

model Role {
  id          Int           @id @default(autoincrement())
  name        String        @unique
  userRoles   UserRole[]
}

model UserRole {
  userId      Int
  roleId      Int
  assignedAt  DateTime      @default(now())
  assignedBy  String?

  user        User          @relation(fields: [userId], references: [id])
  role        Role          @relation(fields: [roleId], references: [id])

  @@id([userId, roleId])
}
```

### 5.5 Self-relations

```prisma
model Category {
  id       Int        @id @default(autoincrement())
  name     String
  parentId Int?
  parent   Category?  @relation("CategoryTree", fields: [parentId], references: [id])
  children Category[] @relation("CategoryTree")
}
```

## 6. Prisma Client

### 6.1 Generación y configuración

```bash
# Generar cliente
npx prisma generate

# Aplicar cambios a la base de datos
npx prisma db push
```

### 6.2 Uso básico

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Código aquí
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### 6.3 Operaciones CRUD

```typescript
// CREATE
const user = await prisma.user.create({
  data: {
    email: "juan@example.com",
    name: "Juan Pérez",
    age: 30,
  },
});

// READ
const users = await prisma.user.findMany();
const user = await prisma.user.findUnique({
  where: { email: "juan@example.com" },
});

// UPDATE
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Juan Carlos" },
});

// DELETE
const deletedUser = await prisma.user.delete({
  where: { id: 1 },
});
```

## 7. Consultas avanzadas

### 7.1 Filtros y condiciones

```typescript
// Filtros básicos
const users = await prisma.user.findMany({
  where: {
    age: { gte: 18 }, // Mayor o igual a 18
    name: { contains: "Juan" }, // Contiene 'Juan'
    email: { endsWith: "@gmail.com" },
    isActive: true,
  },
});

// Operadores lógicos
const users = await prisma.user.findMany({
  where: {
    OR: [{ age: { lt: 18 } }, { age: { gt: 65 } }],
    AND: [{ isActive: true }, { email: { contains: "@company.com" } }],
  },
});

// Filtros en relaciones
const postsWithComments = await prisma.post.findMany({
  where: {
    comments: {
      some: {
        author: {
          name: { contains: "Admin" },
        },
      },
    },
  },
});
```

### 7.2 Ordenamiento y paginación

```typescript
// Ordenamiento
const users = await prisma.user.findMany({
  orderBy: [{ name: "asc" }, { createdAt: "desc" }],
});

// Paginación
const users = await prisma.user.findMany({
  skip: 10,
  take: 5,
  orderBy: { id: "asc" },
});

// Cursor-based pagination
const users = await prisma.user.findMany({
  take: 10,
  cursor: { id: 100 },
  skip: 1, // Skip the cursor
  orderBy: { id: "asc" },
});
```

### 7.3 Selecciones e inclusiones

```typescript
// Select específicos campos
const users = await prisma.user.findMany({
  select: {
    id: true,
    email: true,
    name: true,
  },
});

// Include relaciones
const usersWithPosts = await prisma.user.findMany({
  include: {
    posts: true,
    profile: true,
  },
});

// Include con filtros
const usersWithRecentPosts = await prisma.user.findMany({
  include: {
    posts: {
      where: {
        createdAt: {
          gte: new Date("2024-01-01"),
        },
      },
      orderBy: { createdAt: "desc" },
      take: 5,
    },
  },
});
```

### 7.4 Agregaciones

```typescript
// Contar
const userCount = await prisma.user.count();
const activeUserCount = await prisma.user.count({
  where: { isActive: true },
});

// Agregaciones numéricas
const stats = await prisma.user.aggregate({
  _avg: { age: true },
  _sum: { age: true },
  _min: { age: true },
  _max: { age: true },
  _count: { id: true },
});

// Group By
const ageGroups = await prisma.user.groupBy({
  by: ["age"],
  _count: {
    id: true,
  },
  orderBy: {
    age: "asc",
  },
});
```

## 8. Transacciones

### 8.1 Transacciones secuenciales

```typescript
const [user, profile] = await prisma.$transaction([
  prisma.user.create({
    data: {
      email: "juan@example.com",
      name: "Juan",
    },
  }),
  prisma.profile.create({
    data: {
      bio: "Desarrollador",
      userId: 1, // Esto debería ser dinámico
    },
  }),
]);
```

### 8.2 Transacciones interactivas

```typescript
const result = await prisma.$transaction(async (prisma) => {
  // Crear usuario
  const user = await prisma.user.create({
    data: {
      email: "juan@example.com",
      name: "Juan",
    },
  });

  // Crear perfil usando el ID del usuario
  const profile = await prisma.profile.create({
    data: {
      bio: "Desarrollador",
      userId: user.id,
    },
  });

  return { user, profile };
});
```

### 8.3 Transacciones con timeout

```typescript
const result = await prisma.$transaction(
  async (prisma) => {
    // Operaciones de base de datos
  },
  {
    maxWait: 5000, // Tiempo máximo de espera
    timeout: 10000, // Timeout de la transacción
  }
);
```

## 9. Migraciones

### 9.1 Crear migración

```bash
# Crear migración basada en cambios del schema
npx prisma migrate dev --name add-user-model

# Aplicar migraciones pendientes
npx prisma migrate deploy

# Reset de la base de datos
npx prisma migrate reset
```

### 9.2 Estados de migración

```bash
# Ver estado de migraciones
npx prisma migrate status

# Marcar migración como aplicada sin ejecutar
npx prisma migrate resolve --applied "migration_name"
```

### 9.3 Ejemplo de migración generada

```sql
-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
```

## 10. Seeding

### 10.1 Configuración de seed

```typescript
// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Crear usuarios de prueba
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      posts: {
        create: {
          title: "Check out Prisma",
          content: "https://www.prisma.io",
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      posts: {
        create: [
          {
            title: "Follow Prisma on Twitter",
            content: "https://twitter.com/prisma",
          },
          {
            title: "Follow Nexus on Twitter",
            content: "https://twitter.com/nexusgql",
          },
        ],
      },
    },
  });

  console.log({ alice, bob });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### 10.2 Configuración en package.json

```json
{
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```

### 10.3 Ejecutar seed

```bash
npx prisma db seed
```

## 11. Prisma Studio

```bash
# Abrir Prisma Studio
npx prisma studio
```

Prisma Studio proporciona una interfaz web para:

- Visualizar datos
- Editar registros
- Explorar relaciones
- Ejecutar consultas

## 12. Validación y middleware

### 12.1 Middleware

```typescript
const prisma = new PrismaClient();

// Middleware para logging
prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
  return result;
});

// Middleware para soft delete
prisma.$use(async (params, next) => {
  if (params.action === "delete") {
    params.action = "update";
    params.args["data"] = { deleted: true };
  }

  if (params.action === "deleteMany") {
    params.action = "updateMany";
    if (params.args.data != undefined) {
      params.args.data["deleted"] = true;
    } else {
      params.args["data"] = { deleted: true };
    }
  }

  return next(params);
});
```

### 12.2 Validación con Zod

```bash
npm install zod
```

```typescript
import { z } from "zod";

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  age: z.number().min(0).max(120),
});

async function createUser(data: unknown) {
  const validatedData = CreateUserSchema.parse(data);

  return await prisma.user.create({
    data: validatedData,
  });
}
```

## 13. Raw queries

### 13.1 SQL crudo

```typescript
// Query crudo
const users = await prisma.$queryRaw`
  SELECT * FROM "User" WHERE age > ${18}
`;

// Query sin tipado
const result = await prisma.$queryRawUnsafe('SELECT * FROM "User" WHERE age > $1', 18);

// Execute SQL
await prisma.$executeRaw`
  UPDATE "User" SET name = 'Anonymous' WHERE email IS NULL
`;
```

### 13.2 Queries con tipos

```typescript
interface UserWithPostCount {
  id: number;
  email: string;
  name: string | null;
  postCount: bigint;
}

const usersWithPostCount: UserWithPostCount[] = await prisma.$queryRaw`
  SELECT u.id, u.email, u.name, COUNT(p.id) as "postCount"
  FROM "User" u
  LEFT JOIN "Post" p ON u.id = p."authorId"
  GROUP BY u.id, u.email, u.name
`;
```

## 14. Configuración avanzada

### 14.1 Múltiples esquemas de base de datos

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["public", "admin"]
}

model User {
  id    Int    @id @default(autoincrement())
  email String @unique

  @@schema("public")
}

model AdminLog {
  id      Int      @id @default(autoincrement())
  action  String
  timestamp DateTime @default(now())

  @@schema("admin")
}
```

### 14.2 Configuración del cliente

```typescript
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  errorFormat: "pretty",
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
```

### 14.3 Connection pooling

```typescript
// Para aplicaciones serverless
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + "?connection_limit=1&pool_timeout=0",
    },
  },
});
```

## 15. Deployment y producción

### 15.1 Variables de entorno

```env
# Desarrollo
DATABASE_URL="postgresql://dev:password@localhost:5432/myapp_dev"

# Producción
DATABASE_URL="postgresql://user:password@prod-server:5432/myapp_prod"
PRISMA_QUERY_ENGINE_LIBRARY=/app/node_modules/.prisma/client/libquery_engine-*.so
```

### 15.2 Docker

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### 15.3 Scripts de deployment

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "migrate:deploy": "prisma migrate deploy",
    "db:seed": "prisma db seed",
    "generate": "prisma generate"
  }
}
```

## 16. Testing

### 16.1 Setup para tests

```typescript
// tests/setup.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.TEST_DATABASE_URL,
    },
  },
});

beforeEach(async () => {
  // Limpiar base de datos antes de cada test
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

export { prisma };
```

### 16.2 Test de ejemplo

```typescript
import { prisma } from "./setup";

describe("User CRUD", () => {
  test("should create user", async () => {
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        name: "Test User",
      },
    });

    expect(user.email).toBe("test@example.com");
    expect(user.name).toBe("Test User");
  });

  test("should find user by email", async () => {
    await prisma.user.create({
      data: {
        email: "test@example.com",
        name: "Test User",
      },
    });

    const user = await prisma.user.findUnique({
      where: { email: "test@example.com" },
    });

    expect(user).not.toBeNull();
    expect(user?.email).toBe("test@example.com");
  });
});
```

## 17. Optimización y mejores prácticas

### 17.1 Índices

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  firstName String
  lastName  String
  createdAt DateTime @default(now())

  @@index([firstName, lastName])
  @@index([createdAt])
}
```

### 17.2 Conexiones eficientes

```typescript
// Singleton pattern para Prisma Client
class PrismaService {
  private static instance: PrismaClient;

  static getInstance(): PrismaClient {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient();
    }
    return PrismaService.instance;
  }
}

export const prisma = PrismaService.getInstance();
```

### 17.3 Query optimization

```typescript
// Evitar N+1 queries
const usersWithPosts = await prisma.user.findMany({
  include: {
    posts: {
      select: {
        id: true,
        title: true,
      },
    },
  },
});

// Usar findMany con include en lugar de múltiples queries
// ❌ Malo
const users = await prisma.user.findMany();
for (const user of users) {
  user.posts = await prisma.post.findMany({
    where: { authorId: user.id },
  });
}

// ✅ Bueno
const usersWithPosts = await prisma.user.findMany({
  include: { posts: true },
});
```

## 18. Comparación con otros ORMs

### 18.1 Prisma vs TypeORM

| Característica | Prisma      | TypeORM       |
| -------------- | ----------- | ------------- |
| Type Safety    | Completo    | Parcial       |
| Schema         | Declarativo | Decoradores   |
| Migraciones    | Automáticas | Manuales/Auto |
| Query Builder  | No          | Sí            |
| Raw SQL        | Limitado    | Completo      |
| Learning Curve | Fácil       | Moderado      |

### 18.2 Cuándo usar Prisma

**Usar Prisma cuando:**

- Type safety es crítico
- Equipo nuevo en ORMs
- Desarrollo rápido es prioridad
- Schema simple a moderado

**Considerar alternativas cuando:**

- Necesitas control total sobre SQL
- Schema muy complejo
- Migraciones complejas
- Performance crítica

## 19. Comandos útiles

```bash
# Schema y generación
npx prisma init                    # Inicializar Prisma
npx prisma generate               # Generar cliente
npx prisma db push               # Sincronizar schema con DB
npx prisma db pull               # Generar schema desde DB existente

# Migraciones
npx prisma migrate dev           # Crear y aplicar migración
npx prisma migrate deploy        # Aplicar migraciones en prod
npx prisma migrate status        # Ver estado de migraciones
npx prisma migrate reset         # Reset completo

# Utilidades
npx prisma studio               # Abrir Prisma Studio
npx prisma db seed             # Ejecutar seeding
npx prisma format              # Formatear schema
npx prisma validate            # Validar schema
```

## 20. Recursos adicionales

- **Documentación oficial**: https://www.prisma.io/docs
- **Ejemplos**: https://github.com/prisma/prisma-examples
- **Community**: https://github.com/prisma/prisma/discussions
- **Blog**: https://www.prisma.io/blog

Prisma ofrece una experiencia de desarrollo moderna con excellent type safety y herramientas integradas que hacen el trabajo con bases de datos más productivo y menos propenso a errores.
