
        <?php
            $servername = 'mysql.info.unicaen.fr';
            $username = 'mocquar211';
            $password = 'eifoofu8aeD6oor7';
            $option = array(
                                PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
                                PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
                            );
            
            //On établit la connexion
            $conn = new PDO("mysql:host=$servername;dbname=mocquar211_1", $username, $password, $option);
        ?>