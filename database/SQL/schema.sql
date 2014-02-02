DROP DATABASE chatHack;

CREATE DATABASE chatHack;

USE chatHack;

CREATE TABLE `messages`(
  `id` TINYINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `text` VARCHAR(25) NULL,
  `timestamp` VARCHAR(25) NOT NULL,
  `username` VARCHAR(25) NOT NULL,
  `room` VARCHAR(30) NOT NULL DEFAULT 'main'
);

CREATE TABLE `users`(
  `username` VARCHAR(25) NOT NULL PRIMARY KEY,
  `firstname` VARCHAR(20) NOT NULL,
  `lastname` VARCHAR(20) NOT NULL
);


/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
