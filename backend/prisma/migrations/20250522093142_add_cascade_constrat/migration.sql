-- DropForeignKey
ALTER TABLE `presence` DROP FOREIGN KEY `Presence_idAgent_fkey`;

-- AddForeignKey
ALTER TABLE `Presence` ADD CONSTRAINT `Presence_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `Agent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
