
<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $option = array(
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
                    );
            
    //On établit la connexion
    $conn = new PDO("mysql:host=$servername;dbname=mocquar211_1", $username, $password, $option);

    // création d'une variable nous permettant d'afficher des messages utilisateurs sur nos pages
    $msg = '';
        ?>