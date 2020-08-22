CREATE DATABASE workshop;
USE workshop;

CREATE TABLE `book` (`id` INT NOT NULL AUTO_INCREMENT,`name` TEXT,KEY `id` (`id`) USING BTREE);
INSERT INTO `book` (name) VALUES('NestJS Beginners');
INSERT INTO `book` (name) VALUES('ReactJS Beginners');
INSERT INTO `book` (name) VALUES('NodeJS Advanced Patterns');
