DROP DATABASE IF EXISTS `users_database`;
CREATE DATABASE `users_database`;


USE users_database;

-- CREATE TABLE users(
--   id INT NOT NULL AUTO_INCREMENT,
--   user_name VARCHAR(45) NULL,
--   user_email VARCHAR(45) NULL,
--   user_password VARCHAR(45) NULL,
--   user_favorites VARCHAR(45) NULL,
--   PRIMARY KEY (id)
-- );

INSERT INTO users (user_name, user_email, user_password, user_favorites, createdAt, updatedAt)
VALUES ("William", "test@test.com", "blablbalba", "sofa", '10:30', '3:45');
 SELECT * FROM users;
