DROP SCHEMA IF EXISTS chat_nanterre;
CREATE DATABASE IF NOT EXISTS chat_nanterre;
USE chat_nanterre;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    user_psw VARCHAR(50) NOT NULL UNIQUE 
    )  ENGINE=innoDB;
CREATE TABLE messages (
    message_id INT AUTO_INCREMENT,
    message VARCHAR(255) NOT NULL,
    user_id INT,
    sent_date DATETIME NOT NULL,
    PRIMARY KEY (message_id)
    )  ENGINE=innoDB;