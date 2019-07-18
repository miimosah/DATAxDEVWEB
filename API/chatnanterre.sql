SELECT * FROM chatnanterre.users;
INSERT INTO users(user_name, user_psw)
VALUES('user1', 'psw1'), ('user2', 'psw2');
SELECT * FROM users;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rm140991';