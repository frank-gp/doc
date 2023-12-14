  -- show the list of users:
  SELECT User, Host FROM mysql.user;

  -- create a new user
  CREATE USER 'username123'@'localhost' IDENTIFIED BY 'password123';

  /* Grant the necessary privileges to the user. 
  For example, to grant all privileges on all databases, 
  you can use the following command: */
  GRANT ALL PRIVILEGES ON *.* TO 'username123'@'localhost';

  -- Flush the privileges to apply the changes:
  FLUSH PRIVILEGES;

  -- Exit the MySQL command-line client by running the command:
  exit;

  -- delete the user
  DROP USER 'username123'@'localhost';

  --Flush the privileges to apply the changes:
  FLUSH PRIVILEGES; 
  exit;

  -- update the password for a user
  ALTER USER 'username123'@'localhost' IDENTIFIED BY 'new_password';


  /***********/
  /* In MySQL, you cannot directly update a user's username. 
  Instead, you need to create a new user with the desired username 
  and the same privileges as the existing user, 
  and then delete the old user. */

  -- Create a new user with the desired username
  CREATE USER 'new_username123'@'localhost' IDENTIFIED BY 'password123';

  -- Transfer the privileges from the old user to the new user
  GRANT ALL PRIVILEGES ON *.* TO 'new_username123'@'localhost' WITH GRANT OPTION;

  -- Delete the old user
  DROP USER 'old_username123'@'localhost';
