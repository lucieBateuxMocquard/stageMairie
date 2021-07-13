<?php 
  session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php');
?>

<h1 class="text-center">Panier</h1>

<?php 



// Tu récupères tous les produits, tu joints la table boutiques pour pouvoir utilisé l'id boutique au produit quand id produit=?
  $stmt = $conn->prepare("SELECT * FROM produits JOIN boutiques ON produits.id_boutique = boutiques.id_boutique WHERE id_produit=?"); 
 
    echo "<div class='row'>";
      echo "<div class='col-9'>";
      // AS ?
      foreach($_SESSION['panier'] as $idproduit) { 
        $stmt->execute([$idproduit]);
        $recup=$stmt->fetch();


        // on affiche les résultats 
        echo"<div class='container m-2 border'>";
          echo "<div class='row'>";
            echo "<div class='col-3'>";
              echo " <img src='./comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".filter_var($recup['nom-produit'], FILTER_SANITIZE_URL)."/".$recup['image']."' alt='".$recup['nom-produit']."'height=100px>";
            echo "</div>";//fin de col 2
            echo "<div class='col-3'>";
              echo '<strong>'.$recup['nom-produit'].'</strong>'; 
            echo "</div>";//fin de col 3
            echo "<div class='col-3'>";
              echo "1"; 
            echo "</div>";//fin de col 4
            echo "<div class='col-3'>";
              echo $recup['prix'].' €';  
            echo "</div>";//fin de col 5
          echo "</div>";//fin de row 2
        echo "</div>";// fin de container
      }

      // Vider produit
      echo"<div class='col-3'>";
      echo "<div class=' border'>";
      echo'  <form method="post" action="panier.php" >';
     
      echo'<a href="?action=suppression"  onClick="return(confirm(\'Etes-vous sûr ?\'))" >Vider panier</a>';
      echo" </form>";
      echo "</div>";// fin de border
      echo" </div>";// fin de col 6

       // SUPPRESSION DU PANIER
    
    if( isset($_GET['action']) && $_GET['action'] == 'suppression') 
    {
      unset($_SESSION['panier']);
      // header('location:panier.php');
      echo '<script>
      window.onload = function()
      { 
        window.location = "panier.php";
      }
      </script>';
    }

    

      echo"</div>";// fin de col 1
      echo"<div class='col-3'>";
      echo "<div class='position-fixed  border'>";
        echo" <p >Total :</p>";
        echo"  <button type='button' class='btn m-2 btn-dark'>Commander</button>";
        echo "</div>";// fin de potion-fixed
      echo" </div>";// fin de col 7
    echo"</div>";// fin de row 1 
?>




<?php include_once('footer/footer.php'); ?>
