import {MigrationInterface, QueryRunner} from "typeorm";

export class dbRelaciones1651023776990 implements MigrationInterface {
    name = 'dbRelaciones1651023776990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacuna" ADD "id_empleado" integer`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "id_login" integer`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "UQ_9ad4088121e984efbb1a4f510e5" UNIQUE ("id_login")`);
        await queryRunner.query(`ALTER TABLE "direccion" ADD "id_empleado" integer`);
        await queryRunner.query(`ALTER TABLE "vacuna" ADD CONSTRAINT "FK_a338e825a834acd9405f3457e61" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5" FOREIGN KEY ("id_login") REFERENCES "login"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "direccion" ADD CONSTRAINT "FK_a9891b6b726c86382811358a72b" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "direccion" DROP CONSTRAINT "FK_a9891b6b726c86382811358a72b"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5"`);
        await queryRunner.query(`ALTER TABLE "vacuna" DROP CONSTRAINT "FK_a338e825a834acd9405f3457e61"`);
        await queryRunner.query(`ALTER TABLE "direccion" DROP COLUMN "id_empleado"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "UQ_9ad4088121e984efbb1a4f510e5"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "id_login"`);
        await queryRunner.query(`ALTER TABLE "vacuna" DROP COLUMN "id_empleado"`);
    }

}
