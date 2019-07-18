USE chat_nanterre;

ALTER TABLE messages
ADD FOREIGN KEY fk_user_msg(user_id)
REFERENCES users(user_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
;