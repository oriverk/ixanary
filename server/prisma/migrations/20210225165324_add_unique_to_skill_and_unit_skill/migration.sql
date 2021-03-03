/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `Skill`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[name,type]` on the table `UnitSkill`. If there are existing duplicate values, the migration will fail.
  - Made the column `type` on table `UnitSkill` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UnitSkill" ALTER COLUMN "type" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Skill.name_unique" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "unitSkillNameWithType" ON "UnitSkill"("name", "type");
