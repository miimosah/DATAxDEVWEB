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
    FOREIGN KEY fj_user_msg(user_id)
	REFERENCES users(user_id),
    sent_date DATETIME NOT NULL,
    PRIMARY KEY (message_id)
    )  ENGINE=innoDB;

