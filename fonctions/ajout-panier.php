<?php
session_start();

if (isset($_GET['idproduit'])) // On a l'id du produit'
{
	$_GET['idproduit'] = (int) $_GET['idproduit'];
  array_push($_SESSION['panier'], $_GET['idproduit']);
		
  echo 'Produit ajouté !</br></br>';
  echo '<a href="../produits.php">Retourner aux produits</a>';
}
else // Il manque des paramètres, on avertit le visiteur
{
	echo 'Erreur, veulliez prevenir l\'administrateur.</br></br> Merci !';
}





  // if (isset($_SESSION['panier']))
  // {
  //   echo 'Session déjà ouverte.</br>';
  //   echo 'panier : '.$_SESSION['panier'].' produit.';
  // }
  // else
  // {
  //   $panier = 0;
  //   $_SESSION['panier'] = $panier;
  //   echo 'Session créée.</br>';
  //   echo 'panier : '.$_SESSION['panier'].' produit.';
  // }
?>
