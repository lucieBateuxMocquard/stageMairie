<?php 
session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php');
  ?>
    



    <h1 class="text-center  text-light">Bienvenue à la mairie !</h1> 
    <div class='p-5 m-5'>
    <p ><strong>Halvah chocolate bar cookie. Jujubes caramels candy canes oat cake gingerbread tootsie roll marzipan fruitcake gummies. Powder marzipan jelly sweet apple pie jelly beans. Gummi bears candy canes ice cream lollipop. Powder muffin fruitcake chocolate. Cotton candy croissant cake gingerbread oat cake marzipan powder cotton candy muffin. Sweet carrot cake jelly-o sweet roll toffee cotton candy chocolate cake cake. Cupcake pie lemon drops cheesecake marzipan liquorice sweet roll jujubes apple pie. Danish pie marshmallow lemon drops liquorice biscuit cake. Pie pudding brownie sugar plum cotton candy tart carrot cake. Sesame snaps lollipop danish dessert. Croissant sugar plum cake sugar plum toffee tootsie roll icing chocolate cake.</strong></p>
    </div>
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
            echo " <img src='./comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".$recup['logo']."' alt='".$recup['nom_boutique']."'>";
            echo 'nom boutique: <strong>'.$recup['nom_boutique'].'</strong><br/>';        
            echo 'description : '.$recup['description'].'<br /><br/>';
            echo "</div>\n";
            echo "</div>\n";
        }  
  
        echo "</div>\n";
 
        
        ?>

<?php
   // On prépare la requête 
   $produit = $conn->query("SELECT * FROM produits JOIN boutiques ON produits.id_boutique = boutiques.id_boutique");  

   
  echo '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">';

//Images
echo ' <div class="carousel-inner">';

echo '   <div class="carousel-item active">';
echo "<img src='/comptes/marchand/boutiques/".$recup['nom_boutique']."/".$recup['nom-produit']."/".$recup['image']."' alt='".$recup['nom-produit']."' height=300px class='d-block' >";
echo '   </div> ';//Fin carousel active 1ere page

while ($recup = $produit->fetch()){ 
echo '  <div class="carousel-item">';
echo '     <img src="comptes/marchand/boutiques/Lemasquequiparle/Masquesentissusjaunes/masqueJaune.jpg" height=300px class="d-block " alt="masque jaune">';
echo '   </div> ';// Fin carousel autre page
}  
echo ' </div> ';// Fin carousel inner

  // <!-- fleche -->
  echo '  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">';
  echo '   <span class="carousel-control-prev-icon" aria-hidden="true"></span>';
  echo '   <span class="sr-only">Previous</span>';
  echo ' </a>';
  echo ' <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">';
  echo '  <span class="carousel-control-next-icon" aria-hidden="true"></span>';
  echo '   <span class="sr-only">Next</span>';
  echo ' </a>';
  echo '</div>';
?>

<?php include_once('footer/footer.php'); ?>