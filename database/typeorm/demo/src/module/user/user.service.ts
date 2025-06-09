import { AppDataSource } from "../../config/data-source";
import { CreateUserDto, UpdateUserDto } from "./dtos-entities/user.dto";
import { Repository } from "typeorm";
import { UserEntity } from "./dtos-entities/user.entity";

export class UsersService {
  private repo: Repository<UserEntity>;

  constructor() {
    this.repo = AppDataSource.getRepository(UserEntity);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return await this.repo.findOneBy({ id });
  }

  async create(dto: CreateUserDto): Promise<UserEntity> {
    const user = this.repo.create(dto);
    return await this.repo.save(user);
  }

  async update(id: number, dto: UpdateUserDto): Promise<UserEntity | null> {
    const user = await this.repo.findOneBy({ id });
    if (!user) return null;
    Object.assign(user, dto);
    return await this.repo.save(user);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
