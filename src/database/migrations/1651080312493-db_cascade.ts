import {MigrationInterface, QueryRunner} from "typeorm";

export class dbCascade1651080312493 implements MigrationInterface {
    name = 'dbCascade1651080312493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacuna" DROP CONSTRAINT "FK_a338e825a834acd9405f3457e61"`);
        await queryRunner.query(`ALTER TABLE "direccion" DROP CONSTRAINT "FK_a9891b6b726c86382811358a72b"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5"`);
        await queryRunner.query(`ALTER TABLE "vacuna" ADD CONSTRAINT "FK_a338e825a834acd9405f3457e61" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "direccion" ADD CONSTRAINT "FK_a9891b6b726c86382811358a72b" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5" FOREIGN KEY ("id_login") REFERENCES "login"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5"`);
        await queryRunner.query(`ALTER TABLE "direccion" DROP CONSTRAINT "FK_a9891b6b726c86382811358a72b"`);
        await queryRunner.query(`ALTER TABLE "vacuna" DROP CONSTRAINT "FK_a338e825a834acd9405f3457e61"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5" FOREIGN KEY ("id_login") REFERENCES "login"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "direccion" ADD CONSTRAINT "FK_a9891b6b726c86382811358a72b" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vacuna" ADD CONSTRAINT "FK_a338e825a834acd9405f3457e61" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
