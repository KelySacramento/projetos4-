import { MigrationInterface, QueryRunner } from "typeorm";
import { hashSync } from "bcryptjs";

export class InitialMigration1733445125482 implements MigrationInterface {
  name = "InitialMigration1733445125482";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP COLUMN "expirationDate"`
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "category"`);
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "tags"`);
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "reviews"`);
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "brand"`);
    await queryRunner.query(
      `ALTER TABLE "products" DROP COLUMN "carouselImages"`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "complement"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "state"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "country"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "postalCode"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellphone"`);
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_ca19874d752b7aef38f6a876227"`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpfCnpj"`);
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "foreignerDocument"`
    );
    await queryRunner.query(
      `ALTER TABLE "product_purchases" ALTER COLUMN "price" TYPE numeric`
    );

    const hashedPassword = hashSync("12345", 10);
    await queryRunner.query(`
            INSERT INTO "users" ("id", "firstName", "lastName", "gender", "email", "password", "isAdmin", "createdAt", "updatedAt")
            VALUES (
                uuid_generate_v4(),
                'Admin',
                'User',
                'other',
                'admin@example.com',
                '${hashedPassword}',
                true,
                now(),
                now()
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM "users" WHERE "email" = 'admin@example.com'
        `);

    await queryRunner.query(
      `ALTER TABLE "product_purchases" ALTER COLUMN "price" TYPE numeric`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "foreignerDocument" character varying(50) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "cpfCnpj" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_ca19874d752b7aef38f6a876227" UNIQUE ("cpfCnpj")`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "cellphone" character varying(15) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "postalCode" integer NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "country" character varying(15) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "state" character varying(20) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "city" character varying(30) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "complement" character varying(100) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "number" character varying(20) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "address" character varying(100) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE "products" ADD "carouselImages" text`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "brand" character varying(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "reviews" json NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE "products" ADD "tags" json NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "category" character varying(100) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "expirationDate" date NOT NULL`
    );
  }
}
