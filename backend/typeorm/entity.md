```ts
import { Product } from "src/product/entities/product.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  // Relación: N:1 con products. ******
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}

import { Category } from "src/category/entities/category.entity";
import { OrderDetail } from "src/order/entities/orderDetails.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: "int", nullable: false })
  stock: number;

  @Column({ type: "varchar", default: "https://bit.ly/fgpImg1" })
  imgUrl: string;

  // category_id  (Relación 1:N). ******
  @ManyToOne(() => Category, (category) => category.products, {
    nullable: false,
    eager: true,
  })
  category: Category;

  // Relación N:N con orderDetails.
  @ManyToMany(() => OrderDetail, (orderDetail) => orderDetail.products)
  @JoinTable()
  // @JoinTable({
  //   name: 'ProductOrderDetail',
  //   joinColumn: {
  //     name: 'productId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'orderDetailId',
  //     referencedColumnName: 'id',
  //   },
  // })
  orderDetails: OrderDetail[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "src/product/entities/product.entity";

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  price: number;

  // order_id: Relación 1:1 con orders.
  @OneToOne(() => Order, (order) => order.orderDetail, { nullable: false })
  order: Order;

  // Relación N:N con products.
  @ManyToMany(() => Product, (product) => product.orderDetails, {
    cascade: true,
    eager: true,
  })
  products: Product[];
}

import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { OrderDetail } from "./orderDetails.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  // user_id:  (Relación 1:N) con users. ******
  @ManyToOne(() => User, (user) => user.orders, { nullable: false })
  user: User;

  @Column({ type: "date", nullable: false })
  date: Date;

  // Relación 1:1 con orderDetails.
  @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.order, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  orderDetail: OrderDetail;
}

import { Exclude } from "class-transformer";
import { Order } from "src/order/entities/order.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 20, nullable: false, select: false })
  password: string;

  @Column({ type: "int", nullable: true })
  phone: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  country: string;

  @Column({ type: "text", nullable: true })
  address: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  city: string;

  // orders_id: Relación 1:N con orders.
  @OneToMany(() => Order, (order) => order.user, { eager: true })
  orders: Order[];
}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date | null;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  customDate: Date;
}
```
