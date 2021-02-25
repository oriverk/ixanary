-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(10),
    "hiragana" VARCHAR(20),
    "rarity" CHAR(1),
    "jobType" CHAR(1),
    "illustrator" VARCHAR(10),
    "description" VARCHAR(50),
    "cost" REAL,
    "capacity" SMALLINT,
    "yari" CHAR(1),
    "yumi" CHAR(1),
    "kiba" CHAR(1),
    "heiki" CHAR(1),
    "attack" SMALLINT,
    "defence" SMALLINT,
    "intelligence" SMALLINT,
    "attackGrowth" SMALLINT,
    "defenceGrowth" SMALLINT,
    "intGrowth" REAL,
    "skillId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "rarity" CHAR(1),
    "type" CHAR(1),
    "description" VARCHAR(50),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitSkill" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "type" CHAR(1),
    "description" VARCHAR(50),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardToUnitSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CardToUnitSkill_AB_unique" ON "_CardToUnitSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToUnitSkill_B_index" ON "_CardToUnitSkill"("B");

-- AddForeignKey
ALTER TABLE "Card" ADD FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToUnitSkill" ADD FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToUnitSkill" ADD FOREIGN KEY ("B") REFERENCES "UnitSkill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
