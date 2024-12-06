import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ProductPurchases } from "./product_purchase.entity";
import { IsNotEmpty, IsOptional, Length } from "class-validator";

@Entity("products")
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  @IsNotEmpty()
  @Length(2, 255)
  name: string;

  @Column({ type: "text" })
  @IsNotEmpty()
  description: string;

  @Column({ type: "varchar", length: 20 })
  @IsNotEmpty()
  @Length(2, 20)
  size: string;

  @Column({ type: "varchar", length: 255 })
  @IsOptional()
  @Length(2, 255)
  imageUrl: string;

  @Column({ type: "int", width: 20 })
  @IsNotEmpty()
  @Length(2, 20)
  instock: number;

  @Column({ length: 20 })
  @IsNotEmpty()
  @Length(2, 20)
  productAvailable: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(
    () => ProductPurchases,
    (productPurchases) => productPurchases.product
  )
  productPurchases: ProductPurchases[];
}
