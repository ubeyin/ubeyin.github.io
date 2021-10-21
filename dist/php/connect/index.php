<?php
   $hostname = "remotemysql.com:3306";
   $dbname = "EyPL2Kgy7N";
   $username = "EyPL2Kgy7N";
   $password = "kFaNcCWMXZ";

   $server = mysqli_connect($hostname, $username, $password, $dbname);

   if (!$server) {
     $error = mysqli_connect_error();
     echo 0;
   }

   // error_reporting(0);

   /* Create table if table does not exist */

   if(empty(mysqli_query($server, "SELECT * FROM users"))) {
        $table1 = "CREATE TABLE `users`(
          `id` INT(255) NOT NULL AUTO_INCREMENT,
          `username` VARCHAR(255) NOT NULL UNIQUE,
          `name` VARCHAR(255) NOT NULL,
          `email` VARCHAR(255) NOT NULL,
          `verified` TINYINT(1) NOT NULL DEFAULT '0',
          `password` VARCHAR(255) NOT NULL,
          PRIMARY KEY(`id`)
         ) ENGINE = InnoDB"; 
      
         mysqli_query($server, $table1);
   }

   /* Create table if table does not exist

   if(empty(mysqli_query($server, "SELECT * FROM discuss"))) {
     $table_of_discuss = "CREATE TABLE `discuss`(
      `id` INT(255) NOT NULL AUTO_INCREMENT,
      `username` VARCHAR(255) NOT NULL,
      `email` VARCHAR(255) NOT NULL,
      `title` VARCHAR(255) NOT NULL,
      `answer` VARCHAR(999) NOT NULL,
      `tag` VARCHAR(255) NOT NULL,
      `verified` TINYINT(1) NOT NULL DEFAULT '0', 
      PRIMARY KEY(`id`)
     ) ENGINE = InnoDB";
  
    mysqli_query($server, $table_of_discuss);
   }*/
?>