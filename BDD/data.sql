USE chat_nanterre;

INSERT INTO users(user_name, user_psw)
VALUES('user1','psw1'), 
      ('user2','psw2')
      ;

INSERT INTO messages(message, user_id, sent_date)
VALUES('msg1',1, now()),
      ('msg2',2, now())
      ; 


-- supp 1 msg
DELETE FROM messages 
WHERE message_id = 1
;  

-- supp 1 user
DELETE FROM users 
WHERE user_id = 1
;

      