import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "credentials" })
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;
}
