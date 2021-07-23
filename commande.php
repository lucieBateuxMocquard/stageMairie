<?php 
  session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php'); 
?>

<h1 class="text-center">Commande</h1>

<?php 



// Tu récupères tous les produits, tu joints la table boutiques pour pouvoir utilisé l'id boutique au produit quand id produit=?
  $stmt = $conn->prepare("SELECT * FROM produits JOIN boutiques ON produits.id_boutique = boutiques.id_boutique WHERE id_produit=?"); 
 
  echo "<strong>";
    echo "<div class='row'>";// row 1
      
        echo "<div class='col-7'>";// col 1
          echo "<div class='container m-2 border'>"; // container 1
            echo "lieu de livraison : Votre mairie";
          echo"</div>"; // fin container 1
        echo"</div>";// fin de col 1  
        
         echo "<div class='col-7'>";// col 1
          echo "<div class='container m-2 border'>"; // container 1
            echo "Payement : <br>Sur place, lors du retrait de votre colis.";
          echo"</div>"; // fin container 1
        echo"</div>";// fin de col 1  

        echo "<div class='col-7'>";// col 1
        echo "<div class='container m-2 border'>"; // container 1
          echo " <p>Mode de notification de livraison :<br> SMS </p>";
        echo"</div>"; // fin container 1
      echo"</div>";// fin de col 1  
      
        // echo "<div class='col-7'>";// col 1
        //   echo "<div class='container m-2 border'>"; // container 1
        //     echo'  <form method="post" action="commande.php" >'; // form
        //       echo ' <p>Mode de notification de livraison : </p>';
        //       echo'<div>'; // div 1
        //         echo '<input type="radio" id="mail" name="livraison" value="mail" checked>';
        //         echo '<label for="mail">Mail</label>';
        //       echo "</div>"; // fin div 1
        //       echo'<div>'; // div 2
        //         echo '<input type="radio" id="sms" name="livraison" value="sms" checked>';
        //         echo '<label for="sms">SMS</label>';
        //       echo "</div>"; // fin div 2
        //       echo'<div>'; // div 3
        //         echo '<input type="radio" id="mail_sms" name="livraison" value="mail_sms" checked>';
        //         echo '<label for="mail_sms">Mail et SMS</label>';
        //       echo "</div>"; // fin div 3
        //     echo" </form>";// fin form
        //   echo"</div>"; // fin container 1
        // echo"</div>";// fin de col 1  




      echo"<div class='col-5'>"; // col 2
      echo "<div class='position-fixed  border'>"; // border 1
      echo "Votre commande :";
      foreach($_SESSION['panier'] as $idproduit) { 
        $stmt->execute([$idproduit]);
        $recup=$stmt->fetch();

        // on affiche les résultats 
        echo"<div class='container m-2 border'>"; // container 2
          echo "<div class='row'>"; // row 2
    
            echo "<div class='col-3'>"; // col 3
              echo $recup['nom_produit']; 
            echo "</div>";//fin de col 3
            echo "<div class='col-3'>"; // col 4
              echo "1"; 
            echo "</div>";//fin de col 4
            echo "<div class='col-3'>"; // col 5
              echo $recup['prix'].' €';  
            echo "</div>";//fin de col 5
          echo "</div>";//fin de row 2
        echo "</div>";// fin de container 2
      }
        echo" <p >Total :</p>";
        echo'  <form method="post" action="commande.php" >';
     
        echo'  <a href="?action=validercommande" onClick="return(confirm(\'Etes-vous sûr ?\'))" class="btn m-2 btn-dark">Commander</a>';
        echo" </form>";

        echo "</div>";// fin de border 1
      echo" </div>";// fin de col 7
    echo"</div>";// fin de row 1 
    echo "</strong>";

if( isset($_GET['action']) && $_GET['action'] == 'validercommande') 
{
  echo "bonjour";
  // unset($_SESSION['panier']);
  // // header('location:panier.php');
  // echo '<script>
  // window.onload = function()
  // { 
  //   window.location = "commande.php";
  // }
  // </script>';

   // requête pour créé une livraison
   $livraison = $conn->prepare("INSERT INTO livraison (etat, payement, telephone_client, date_du_jour) VALUES ('en cours de livraison', 'en cours de payement', 0637301388, NOW())");
   $livraison->execute();
    
  // echo $conn->insert_id;

  // ajouter les produits dans la table commande
  

}

    

?>




<?php include_once('footer/footer.php'); ?>