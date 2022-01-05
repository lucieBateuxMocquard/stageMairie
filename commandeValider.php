<?php 
  session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php'); 
?>

<?php
if( isset($_GET['action']) && $_GET['action'] == 'validecommande') 
{
  // unset($_SESSION['panier']);
  // // header('location:panier.php');
  // echo '<script>
  // window.onload = function()
  // { 
  //   window.location = "commande.php";
  // }
  // </script>';

   // On prépare la requête 
   $livraison = $conn->prepare("INSERT INTO livraison (etat, payement, telephone_client, NOW()) VALUES ('en cours de livraison', 'en cours de payement', '0637301384'");  
 
}

?>


<?php include_once('footer.php'); ?>