echo "CREATE DATABASE workshop" | mysql
echo "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'" | mysql
echo "flush privileges;" | mysql