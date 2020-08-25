(cat dump.sql | mysql 2> /dev/null ) || echo Database already init

(echo "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';flush privileges;" | mysql 2> /dev/null )  || echo Database User already setup