-- DropForeignKey
ALTER TABLE `agentmatin` DROP FOREIGN KEY `AgentMatin_idAgent_fkey`;

-- DropForeignKey
ALTER TABLE `agentsoiree` DROP FOREIGN KEY `AgentSoiree_idAgent_fkey`;

-- DropForeignKey
ALTER TABLE `titre` DROP FOREIGN KEY `Titre_idSalaire_fkey`;

-- AddForeignKey
ALTER TABLE `Titre` ADD CONSTRAINT `Titre_idSalaire_fkey` FOREIGN KEY (`idSalaire`) REFERENCES `SalaireHeure`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AgentMatin` ADD CONSTRAINT `AgentMatin_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `Agent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AgentSoiree` ADD CONSTRAINT `AgentSoiree_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `Agent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
