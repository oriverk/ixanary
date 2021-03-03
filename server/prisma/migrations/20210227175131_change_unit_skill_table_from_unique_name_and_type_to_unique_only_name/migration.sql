/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `UnitSkill`. If there are existing duplicate values, the migration will fail.

*/
-- DropIndex
DROP INDEX "unitSkillNameWithType";

-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "name" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "illustrator" SET DATA TYPE VARCHAR(15);

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "name" SET DATA TYPE VARCHAR(15);

-- AlterTable
ALTER TABLE "UnitSkill" ALTER COLUMN "name" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "type" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UnitSkill.name_unique" ON "UnitSkill"("name");
