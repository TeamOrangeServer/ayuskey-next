import {MigrationInterface, QueryRunner} from "typeorm";

export class actorOutbox1594324004120 implements MigrationInterface {
    name = 'actorOutbox1594324004120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "outbox" character varying(512)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "outbox"`);
    }

}
