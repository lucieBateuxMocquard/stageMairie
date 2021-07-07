<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src='comptes/marchand/boutiques/Labellesource/gourde.webp' height=300px class="d-block " alt="gourde">
    </div>
    <div class="carousel-item">
      <img src="comptes/marchand/boutiques/Lemasquequiparle/Masquesentissusjaunes/masqueJaune.jpg" height=300px class="d-block " alt="masque jaune">
    </div>
    <div class="carousel-item">
      <img src="comptes/marchand/boutiques/Lemasquequiparle/Masquesentissusnoirs/masqueNoir.jpeg" class="d-block " height=300px alt="masque noir">
    </div>
  </div>
  <!-- fleche -->
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<!-- Code avec PHP bugger -->

<?php
   // On prépare la requête 
   $produit = $conn->query("SELECT * FROM produits JOIN boutiques ON produits.id_boutique = boutiques.id_boutique");  


 $i = 0;
   //boucle
   echo '<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">';
    echo '<ol class="carousel-indicators">';
    echo 'Ma';
    while ($recup = $produit->fetch()){ 

        echo "Roupi";
        echo '<li data-target="#carouselExampleCaptions" data-slide-to="'.$i.'" class="active"></li>';
        // echo '<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>';
        // echo '<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>';
        $i++;
  }   
  echo '</ol>';
  $i = 0;
  while ($recup = $produit->fetch()) 
  {
    if($i= 0){
        echo "toto";
    echo '<div class="carousel-inner">';
        echo '<div class="carousel-item active">';
            echo "<img src='/comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".filter_var($recup['nom-produit'], FILTER_SANITIZE_URL)."/".$recup['image']."' alt='".$recup['nom-produit']."' height=300px class='d-block w-100' >";

                echo '<div class="carousel-caption d-none d-md-block">';
                    echo '<h5>'.$recup['nom-produit'].'</h5>';
                    echo '<p>'.$recup['description'].'</p>';
                echo '</div>';
        echo '</div>';
    
    
    $i++;
    }
    else{
       
        echo '<div class="carousel-item">';
            echo '<div class="carousel-item">';
                echo "<img src='/comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".filter_var($recup['nom-produit'], FILTER_SANITIZE_URL)."/".$recup['image']."' alt='".$recup['nom-produit']."' height=300px class='d-block w-100' >";
                    echo '<div class="carousel-caption d-none d-md-block">';
                        echo '<h5>'.$recup['nom-produit'].'</h5>';
                        echo '<p>'.$recup['description'].'</p>';
                    echo '</div>';
            echo '</div>';
        echo ' </div>';
    $i++;
    }
  }
    echo ' </div>';
        // <div class="carousel-item">
        //   <img src="..." class="d-block w-100" alt="...">
        //   <div class="carousel-caption d-none d-md-block">
        //     <h5>Second slide label</h5>
        //     <p>Some representative placeholder content for the second slide.</p>
        //   </div>
        // </div>

        // <div class="carousel-item">
        //   <img src="..." class="d-block w-100" alt="...">
        //   <div class="carousel-caption d-none d-md-block">
        //     <h5>Third slide label</h5>
        //     <p>Some representative placeholder content for the third slide.</p>
        //   </div>
        //</div> 
        
 
   
   echo "Bliblou";
   echo '<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">';
        echo '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
        echo ' <span class="sr-only">Previous</span>';
    echo '  </a>';
    echo '<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">';
       echo ' <span class="carousel-control-next-icon" aria-hidden="true"></span>';
       echo '<span class="sr-only">Next</span>';
    echo ' </a>';
echo '</div>';
?>


