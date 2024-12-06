import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeUpdate,
  BeforeInsert,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Purchases } from "./purchases.entity";
import {
  IsNotEmpty,
  IsOptional,
  Matches,
  Length,
  IsEmail,
  IsEnum,
} from "class-validator";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  @IsNotEmpty()
  @Length(2, 50)
  firstName: string;

  @Column({ length: 50 })
  @IsNotEmpty()
  @Length(2, 50)
  lastName: string;

  @Column({ length: 10 })
  @IsEnum(Gender)
  gender: Gender;

  @Column({ unique: true, length: 60 })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ length: 120 })
  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ nullable: true, length: 120 })
  @IsOptional()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Purchases, (purchases) => purchases.user)
  purchases: Purchases[];
}
