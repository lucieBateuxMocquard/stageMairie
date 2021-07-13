<?php 
 session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php');
  ?>
    


    <h1 class="text-center">Boutiques</h1>
  

    <?php
        //On se connecte
        // connectMaBase();
 
        // On prépare la requête 
        $produit = $conn->query("SELECT * FROM boutiques");  
 
        //boucle
        while ($recup = $produit->fetch()) { 
            // on affiche les résultats 
            echo "<div class='container'>";
            echo "<div class='p-5 m-5 border'>";
            echo "<p class='text-center text-light'>";
            echo " <img src='./comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".$recup['logo']."' alt='".$recup['nom_boutique']."'height=300px class='center-block'>";
            echo "</p>";// fin p
            echo '<strong>'.$recup['nom_boutique'].'</strong><br/>';        
            echo 'description : '.$recup['description'].'<br /><br/>';
            echo "</div>\n";
            echo "</div>\n";
        }  
        
 
        
        ?>

<?php include_once('footer/footer.php'); ?>
    


