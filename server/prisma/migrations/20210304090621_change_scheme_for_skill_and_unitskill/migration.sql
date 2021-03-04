/*
  Warnings:

  - You are about to drop the column `description` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `UnitSkill` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `UnitSkill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "description",
ADD COLUMN     "target" VARCHAR(10),
ADD COLUMN     "content" TEXT[],
ADD COLUMN     "content10" TEXT[],
ADD COLUMN     "extra" VARCHAR(20),
ADD COLUMN     "skillName" TEXT,
ADD COLUMN     "first" TEXT[],
ADD COLUMN     "second" TEXT[],
ADD COLUMN     "third" TEXT[];

-- AlterTable
ALTER TABLE "UnitSkill" DROP COLUMN "type",
DROP COLUMN "description",
ADD COLUMN     "target" VARCHAR(10),
ADD COLUMN     "content" TEXT[],
ADD COLUMN     "content10" TEXT[];
