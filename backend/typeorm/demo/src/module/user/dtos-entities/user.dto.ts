export class CreateUserDto {
    name!: string;
    email!: string;
    password!: string;
  }
  
  export class UpdateUserDto {
    name?: string;
    email?: string;
  }
  