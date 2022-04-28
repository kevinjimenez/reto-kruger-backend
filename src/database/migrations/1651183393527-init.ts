import {MigrationInterface, QueryRunner} from "typeorm";

export class init1651183393527 implements MigrationInterface {
    name = 'init1651183393527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vacuna" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT now(), "tipo_vacuna" character varying NOT NULL, "fecha_vacunacion" date NOT NULL, "numero_dosis" integer NOT NULL, "id_empleado" integer, CONSTRAINT "PK_2074f68e883250fb57002dbe685" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "login" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT now(), "usuario" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_a329c22bb966f75b4cea291706e" UNIQUE ("usuario"), CONSTRAINT "UQ_2b7e83440ec7b7cd876e5894c6a" UNIQUE ("password"), CONSTRAINT "PK_0e29aa96b7d3fb812ff43fcfcd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "empleado" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT now(), "nombres" character varying(60) NOT NULL, "apellidos" character varying(60) NOT NULL, "cedula" character varying(10) NOT NULL, "correo_electronico" character varying(30) NOT NULL, "fecha_nacimiento" date, "telefono_movil" character varying(10), "vacunado" boolean, "rol" character varying NOT NULL DEFAULT 'usuario', "id_login" integer, CONSTRAINT "UQ_d178acd320efd5300609842cb33" UNIQUE ("cedula"), CONSTRAINT "UQ_105e538386aa54e1f15ec19e230" UNIQUE ("correo_electronico"), CONSTRAINT "REL_9ad4088121e984efbb1a4f510e" UNIQUE ("id_login"), CONSTRAINT "PK_d15e7688d5ed23e9fdb570b2e5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "direccion" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT now(), "provincia" character varying(30) NOT NULL, "ciudad" character varying(30) NOT NULL, "calle_principal" character varying(60) NOT NULL, "calle_secundaria" character varying(60), "id_empleado" integer, CONSTRAINT "PK_fd40f79091ad0e37bac52fe5c5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vacuna" ADD CONSTRAINT "FK_a338e825a834acd9405f3457e61" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5" FOREIGN KEY ("id_login") REFERENCES "login"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "direccion" ADD CONSTRAINT "FK_a9891b6b726c86382811358a72b" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "direccion" DROP CONSTRAINT "FK_a9891b6b726c86382811358a72b"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_9ad4088121e984efbb1a4f510e5"`);
        await queryRunner.query(`ALTER TABLE "vacuna" DROP CONSTRAINT "FK_a338e825a834acd9405f3457e61"`);
        await queryRunner.query(`DROP TABLE "direccion"`);
        await queryRunner.query(`DROP TABLE "empleado"`);
        await queryRunner.query(`DROP TABLE "login"`);
        await queryRunner.query(`DROP TABLE "vacuna"`);
    }

}
