-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `items_todoId_fkey`;

-- DropIndex
DROP INDEX `items_todoId_fkey` ON `items`;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_todoId_fkey` FOREIGN KEY (`todoId`) REFERENCES `todos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
