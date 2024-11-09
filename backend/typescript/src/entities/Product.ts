import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Category } from "./Category";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "categoryId" })
  category: Category;
}
