CREATE DATABASE workshop;
USE workshop;

CREATE TABLE `books` (`id` INT NOT NULL AUTO_INCREMENT,`name` TEXT,KEY `id` (`id`) USING BTREE);
INSERT INTO `books` (name) VALUES('NestJS Beginners');
INSERT INTO `books` (name) VALUES('ReactJS Beginners');
INSERT INTO `books` (name) VALUES('NodeJS Advanced Patterns');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

flush privileges;
