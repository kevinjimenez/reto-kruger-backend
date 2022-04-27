import {MigrationInterface, QueryRunner} from "typeorm";

export class dbLentghPass1651029927924 implements MigrationInterface {
    name = 'dbLentghPass1651029927924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "login" DROP CONSTRAINT "UQ_2b7e83440ec7b7cd876e5894c6a"`);
        await queryRunner.query(`ALTER TABLE "login" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "login" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "login" ADD CONSTRAINT "UQ_2b7e83440ec7b7cd876e5894c6a" UNIQUE ("password")`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "telefono_movil"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "telefono_movil" character varying(10)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "telefono_movil"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "telefono_movil" character varying`);
        await queryRunner.query(`ALTER TABLE "login" DROP CONSTRAINT "UQ_2b7e83440ec7b7cd876e5894c6a"`);
        await queryRunner.query(`ALTER TABLE "login" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "login" ADD "password" character varying(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "login" ADD CONSTRAINT "UQ_2b7e83440ec7b7cd876e5894c6a" UNIQUE ("password")`);
    }

}
