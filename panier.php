<?php 
  session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php');
?>

<h1 class="text-center">Panier</h1>

<?php 



// Tu récupères tous les produits, tu joints la table boutiques pour pouvoir utilisé l'id boutique au produit quand id produit=?
  $stmt = $conn->prepare("SELECT * FROM produits JOIN boutiques ON produits.id_boutique = boutiques.id_boutique WHERE id_produit=?"); 
 
    echo "<div class='row'>"; // row 1
      echo "<div class='col-9'>"; // col 1
      // AS ?
      foreach($_SESSION['panier'] as $idproduit) { 
        $stmt->execute([$idproduit]);
        $recup=$stmt->fetch();


        // on affiche les résultats 
        echo"<div class='container m-2 border'>"; // container 1
          echo "<div class='row'>"; // row 2
            echo "<div class='col-3'>"; // col 2
              echo " <img src='./comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".filter_var($recup['nom_produit'], FILTER_SANITIZE_URL)."/".$recup['image']."' alt='".$recup['nom_produit']."'height=100px>";
            echo "</div>";//fin de col 2
            echo "<div class='col-3'>"; // col 3
              echo '<strong>'.$recup['nom_produit'].'</strong>'; 
            echo "</div>";//fin de col 3
            echo "<div class='col-3'>"; // col 4
              echo "1"; 
            echo "</div>";//fin de col 4
            echo "<div class='col-3'>"; // col 5
              echo $recup['prix'].' €';  
            echo "</div>";//fin de col 5
          echo "</div>";//fin de row 2
        echo "</div>";// fin de container 1
      }

      // Vider produit
      echo"<div class='col-3'>"; // col 6
      echo "<div class=' border'>"; // border 1
      echo'  <form method="post" action="panier.php" >';
     
      echo'<a href="?action=suppression"  onClick="return(confirm(\'Etes-vous sûr ?\'))" class="btn m-2 btn-dark">Vider panier</a>';
      echo" </form>";
      echo "</div>";// fin de border 1
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
      echo"<div class='col-3'>"; // col 7
      echo "<div class='position-fixed  border'>"; // border 2
        echo" <p >Total :</p>";
        echo"  <button type='button' class='btn m-2 btn-dark'>Commander</button>";
        echo "</div>";// fin de border 2
      echo" </div>";// fin de col 7
    echo"</div>";// fin de row 1 
?>




<?php include_once('footer/footer.php'); ?>
