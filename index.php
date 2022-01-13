<?php 
//session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php');
  ?>
    
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/styles.css">
  <title>Site mairie</title>
</head>
<body>
<h1 class="text-center  text-light">Accueil</h1> 
    <div class='p-5 m-5'>
    <p ><strong>Bienvenue sur la nouvelle plateforme de la mairie ! Vous trouverez sur ce site different produits de vos commerçants locaux.</strong></p>
    </div>
</body>
</html>


    
    <?php
        //On se connecte
        // connectMaBase();
 
        // On prépare la requête 
        $boutique = $conn->query("SELECT * FROM boutiques");  
 
        //boucle
       
        echo "<div class='p-5 m-5 border'>";
        echo "<h2 class='text-center text-light'>Les boutiques les plus demandées :</h2>";

        while ($recup = $boutique->fetch()) { 
            // on affiche les résultats 
            echo "<div class='container'>";
            echo "<div class='p-5 m-5 border'>";
            echo "<p class='text-center text-light'>";
            echo " <img src='./comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".$recup['logo']."' alt='".$recup['nom_boutique']."'height=300px class='center-block'><br/>";
            echo 'nom boutique: <strong>'.$recup['nom_boutique'].'</strong><br/>';        
            echo 'description : '.$recup['description'].'<br /><br/>';
            echo "</div>\n";
            echo "</div>\n";
        }  
  
        echo "</div>\n";
 
        
        ?>

<?php
// <!--
//    // On prépare la requête 
//    $produit = $conn->query("SELECT * FROM produits JOIN boutiques ON produits.id_boutique = boutiques.id_boutique");  

   
//   echo '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">';

// //Images
// echo ' <div class="carousel-inner">';

// echo '   <div class="carousel-item active">';
// echo "<img src='/comptes/marchand/boutiques/".$recup['nom_boutique']."/".$recup['nom_produit']."/".$recup['image']."' alt='".$recup['nom_produit']."' height=300px class='d-block' >";
// echo '   </div> ';//Fin carousel active 1ere page

// while ($recup = $produit->fetch()){ 
// echo '  <div class="carousel-item">';
// echo '     <img src="comptes/marchand/boutiques/Lemasquequiparle/Masquesentissusjaunes/masqueJaune.jpg" height=300px class="d-block " alt="masque jaune">';
// echo '   </div> ';// Fin carousel autre page
// }  
// echo ' </div> ';// Fin carousel inner

//   // <!-- fleche -->
//   echo '  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">';
//   echo '   <span class="carousel-control-prev-icon" aria-hidden="true"></span>';
//   echo '   <span class="sr-only">Previous</span>';
//   echo ' </a>';
//   echo ' <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">';
//   echo '  <span class="carousel-control-next-icon" aria-hidden="true"></span>';
//   echo '   <span class="sr-only">Next</span>';
//   echo ' </a>';
//   echo '</div>';
  
?>

<?php include_once('footer.php'); ?>