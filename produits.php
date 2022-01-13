<?php 
//session_start();
  include_once('header.php');
  include_once('comptes/coBDD.php'); 
  ?>

 
<h1 class="text-center">Produits</h1>

<?php
     
 
        // On prépare la requête 
        $produit = $conn->query("SELECT * FROM produits JOIN boutiques ON produits.id_boutique = boutiques.id_boutique");  

        // SUPPRESSION D'UN ARTICLE
        // En cliquant sur le lien du tableau, on passe  dans l'url deux arguments $_GET : l'action et l'id_article
        if( isset($_GET['action']) && $_GET['action'] == 'suppression' && !empty($_GET['id_produit']) ) {
          $suppression = $conn->prepare("DELETE FROM produits WHERE id_produit = :id_produit");
          $suppression->bindParam(':id_produit', $_GET['id_produit'], PDO::PARAM_STR);
          $suppression->execute();
      }
 
        //boucle
          echo "<div class='row'>";
        while ($recup = $produit->fetch()) { 
        // on affiche les résultats 
          echo "<div class='col-6 '>"; // mettre col-sm a la place de col-6 pour le responsive      
            echo "<div class=' m-5 border'>";
              echo "<p class='text-center'>";
              // Image
              echo " <img src='".$recup['image_produit']."' height=300px class='img-fluid w-100'>";
               // echo " <img src='./comptes/marchand/boutiques/".filter_var($recup['nom_boutique'], FILTER_SANITIZE_URL)."/".filter_var($recup['nom_produit'], FILTER_SANITIZE_URL)."/".$recup['image']."' alt='".$recup['nom_produit']."' height=300px class='center-block'>";
              echo "</p>";// fin p
              echo "<div class='bg-dark text-light '>";
                echo "<div class='row p-3'>";
                  echo "<div class='col-4' >";
                  // nom produit
                    echo '<strong>'.$recup['nom_produit'].'</strong>'; 
                  echo "</div>\n";// fin col
                  // quantité restante
                  echo "<div class='col-4 text-center text-light'>";
                    echo 'Quantité : '.$recup['quantite']; 
                  echo "</div>\n";// fin col
                  // prix
                  echo "<div class='col-4 text-right text-light'>"; 
                    echo $recup['prix'].' €';
                  echo "</div>\n";// fin col  
                echo "</div>\n";//fin row
                echo "<p class=' pl-2 pr-2'>";
                // description
                  echo 'description : '.$recup['description_produit'].'<br /><br/>';
                echo "</p>";// fin p

                echo "<div class='row p-3'>";
                  echo "<div class='col-6'>";
                    echo "<p class=' pl-2 pr-2'>";
                    // nom de la boutique
                    echo 'Boutique : '.$recup['nom_boutique'].'<br /><br/>';
                    echo "</p>";// fin p
                  echo "</div>\n";// fin col  

                echo "<div class='col-6 '>";                          
                  echo '<a href="./fonctions/ajout-panier.php?idproduit='.$recup["id_produit"].'" class="btn btn-info float-right">Acheter</a>';                        
                echo "</div>\n";// fin col  
              echo "</div>\n";//fin row

              echo "<div class='row p-3'>";
                echo "<div class='col-6'>";
                //bouton supprimer
                echo '<td><a href="?action=suppression&id_produit=' . $recup["id_produit"] . '" class="btn btn-danger" onclick="return(confirm(\'Etes-vous sûr ?\'))">Supprimer</a></td>';
                echo "</div>\n";// fin col  
              echo "</div>\n";//fin row

              echo "</div>\n";//fin div bg
            echo "</div>\n";//fin div border            
          echo "</div>\n";// fin col-6
        }  
        echo "</div>\n";//fin row
 
        
        ?>

<?php include_once('footer.php'); ?>
