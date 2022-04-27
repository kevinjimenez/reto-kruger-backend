import {MigrationInterface, QueryRunner} from "typeorm";

export class dbRol1651034462132 implements MigrationInterface {
    name = 'dbRol1651034462132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" ADD "rol" character varying NOT NULL DEFAULT 'usuario'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "rol"`);
    }

}
