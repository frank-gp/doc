```sql
SHOW DATABASES;

DROP DATABASE IF EXISTS wp;
CREATE DATABASE wp;

USE wp;

SHOW TABLES;

SELECT * FROM wp_users;

INSERT INTO wp_users (user_login, user_pass, user_nicename, user_email, user_url, user_registered, user_status, display_name)
VALUES ('MyUser123', MD5('MyPassword123'), 'MyNicename', 'myemail@gmail.com', 'http://frankgp.com', NOW(), 0, 'Frank GP');

SELECT ID FROM wp_users WHERE user_login='MyUser123';

INSERT INTO wp_usermeta (user_id, meta_key, meta_value) VALUES
(2, 'wp_capabilities', 'a:1:{s:13:"administrator";b:1;}'),
(2, 'wp_user_level', '10');

SELECT * FROM wp_usermeta;

```
