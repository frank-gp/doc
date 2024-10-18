```ts
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env", // Asegúrate de que el archivo .env esté en la raíz del proyecto
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente
    }),
    TypeOrmModule.forRoot({
      type: "postgres", // El tipo de base de datos que estás usando
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_NAME,
      password: "admin",
      database: "postgres",
      entities: [User, Product, Category], // Aquí debes incluir todas tus entidades
      synchronize: true, // No uses en producción; puede perder datos
      dropSchema: true,
    }),
    // TypeOrmModule.forFeature([User]), // Para cada entidad que usas en módulos específicos
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    // Imprime el valor de DATABASE_HOST en la consola
    console.log("DATABASE_NAME:", process.env.DATABASE_NAME);
  }
}
```
