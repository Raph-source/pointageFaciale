-- CreateTable
CREATE TABLE `Departement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalaireHeure` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Montant` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Titre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Intitule` VARCHAR(191) NOT NULL,
    `idSalaire` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(191) NOT NULL,
    `PostNom` VARCHAR(191) NOT NULL,
    `Prenom` VARCHAR(191) NOT NULL,
    `Matricule` VARCHAR(191) NOT NULL,
    `idDepartement` INTEGER NOT NULL,
    `idTitre` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idAgent` INTEGER NOT NULL,
    `Date` DATETIME(3) NOT NULL,
    `HeureArrivee` DATETIME(3) NOT NULL,
    `HeureSortie` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AgentMatin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idAgent` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AgentSoiree` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idAgent` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Titre` ADD CONSTRAINT `Titre_idSalaire_fkey` FOREIGN KEY (`idSalaire`) REFERENCES `SalaireHeure`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agent` ADD CONSTRAINT `Agent_idDepartement_fkey` FOREIGN KEY (`idDepartement`) REFERENCES `Departement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agent` ADD CONSTRAINT `Agent_idTitre_fkey` FOREIGN KEY (`idTitre`) REFERENCES `Titre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presence` ADD CONSTRAINT `Presence_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `Agent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AgentMatin` ADD CONSTRAINT `AgentMatin_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `Agent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AgentSoiree` ADD CONSTRAINT `AgentSoiree_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `Agent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
