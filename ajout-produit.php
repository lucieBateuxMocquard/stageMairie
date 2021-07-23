<?php 
session_start();
  include_once('header.php');
  include_once('comptes/coBDD.php'); 

  ?>
<h1 class="text-center"> Ajout Produit</h1>
  
  <?php

// Code récupérer du projet Blog


    // ENREGISTREMENT DES PRODUITS
    if( isset($_POST['nom_produit']) /*&& isset($_POST['image'])*/ && isset($_POST['quantite']) && isset($_POST['prix']) && isset($_POST['description']) && isset($_POST['boutique'])) 
    {
        $nom = trim($_POST['nom_produit']);
        // $image_principale  = trim($_POST['image_principale']);
        $quantite  = trim($_POST['quantite']);
        $prix  = trim($_POST['prix']);
        $description  = trim($_POST['description']);
        $boutique  = trim($_POST['boutique']);

        echo $boutique;
        // enregistrement du produit
        $enregistrement = $conn->prepare("INSERT INTO produits (nom_produit, quantite, /*image_principale,*/ prix, description , id_boutique) VALUES (:nom_produit, :quantite, /*:image_principale, */:prix, :description, :boutique)");
        $enregistrement->bindParam(':nom_produit', $nom);
        $enregistrement->bindParam(':quantite', $quantite);
        // $enregistrement->bindParam(':image_principale', $image_principale, PDO::PARAM_STR);
        $enregistrement->bindParam(':prix', $prix);
        $enregistrement->bindParam(':description', $description);
  
        $enregistrement->bindParam(':boutique', $boutique);
        $enregistrement->debugDumpParams();
        $enregistrement->execute();
    }

    // Requete de récupération des articles pour les afficher dans un tableau html :
    // SELECT * FROM article ORDER BY date_enregistrement DESC
    /*
    SELECT id_article, titre, date_enregistrement, image_principale, nom_categorie, pseudo 
    FROM article 
    INNER JOIN membre ON id_membre = membre_id 
    INNER JOIN categorie ON id_categorie = categorie_id 
    ORDER BY date_enregistrement DESC
    */

    // $liste_articles = $pdo->query("SELECT id_article, titre, date_enregistrement, image_principale, nom_categorie, pseudo 
    //                                 FROM article 
    //                                 INNER JOIN membre ON membre.id_membre = article.membre_id 
    //                                 INNER JOIN categorie ON id_categorie = categorie_id 
    //                                 ORDER BY date_enregistrement DESC"); 




?>

    <div class="container">

        <div class="row">
            <div class="col-sm-8 mx-auto">
                <form method="post" action="" class="mt-5 border p-3">
                    <div class="mb-3">
                        <label for="nom_produit">Nom produit</label>
                        <input type="text" name="nom_produit" id="nom_produit" value="" class='form-control'>
                    </div>
                    <!-- <div class="mb-3">
                        <label for="image">Image</label>
                        <input type="text" name="image" id="image" value="" class='form-control'>
                    </div> -->
                    <div class="mb-3">
                        <label for="quantite">Quantité</label>
                        <input type="number" name="quantite" id="quantite" value="0" max="10000" class='form-control'>
                    </div>
                    <div class="mb-3">
                        <label for="prix">Prix</label>
                        <input type="number" name="prix" id="prix" value="" max="10000" class='form-control'>
                    </div>
                    <div class="mb-3">
                        <label for="description">Déscription</label>
                        <textarea name="description" id="description" class='form-control'></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="boutique">Boutique</label>
                      <select name="boutique" id="boutique" class='form-control'>
                    <!-- On récupère les données de la table boutique pour pouvoir proposer toutes les boutiques existantes -->
                        <?php
                        $boutiques = $conn->query("SELECT * FROM boutiques");

                        while ($recup = $boutiques->fetch()) { 
                            echo '<option value="'.$recup['id_boutique'].'">'.$recup['nom_boutique']."</option>";
                        }
                        ?>
                      </select>
                    </div>
                    <div class="mb-3">
                        <hr>
                        <button type="submit" class="btn btn-primary w-100">Enregistrement</button>
                    </div>
                </form>
            </div>
        </div>

       

  </div>





  

  <?php include_once('footer/footer.php'); ?>