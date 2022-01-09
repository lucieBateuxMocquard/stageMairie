<?php 
session_start();
  include_once('header.php');
  include_once('comptes/coBDD.php'); 
?>

<h1 class="text-center"> Ajout Produit</h1>
  
  <?php

    // ENREGISTREMENT DES PRODUITS
    if( isset($_POST['nom_produit']) && isset($_POST['quantite']) && isset($_POST['prix']) && isset($_POST['image_produit']) && isset($_POST['description_produit']) && isset($_POST['boutique'])) 
    {
        //création des variables
        $nom = trim($_POST['nom_produit']);
        $quantite  = trim($_POST['quantite']);
        $prix  = trim($_POST['prix']);
        $image_produit  = trim($_POST['image_produit']);
        $description_produit  = trim($_POST['description_produit']);
        $boutique  = trim($_POST['boutique']);

        // enregistrement du produit
        $enregistrement = $conn->prepare("INSERT INTO produits (nom_produit, quantite, prix, image_produit, description_produit, id_boutique) VALUES (:nom_produit, :quantite, :prix, :image_produit, :description_produit, :boutique)");
        $enregistrement->bindParam(':nom_produit', $nom);
        $enregistrement->bindParam(':quantite', $quantite);
        $enregistrement->bindParam(':prix', $prix);
        $enregistrement->bindParam(':image_produit', $image_produit);
        $enregistrement->bindParam(':description_produit', $description_produit);
  
        $enregistrement->bindParam(':boutique', $boutique);
        //vérification des données envoyez lors de l'enregistrement du produit
        //$enregistrement->debugDumpParams();
        $enregistrement->execute();
       
    }

  ?>

<!-- Formulaire d'enregistrement du produit -->
    <div class="container">
        <div class="row">
            <div class="col-sm-8 mx-auto">
                <form method="post" action="" class="mt-5 border p-3">
                    <div class="mb-3">
                        <label for="nom_produit">Nom du produit</label>
                        <input type="text" name="nom_produit" id="nom_produit" value="" class='form-control'>
                    </div>
                    <div class="mb-3">
                        <label for="quantite">Quantité</label>
                        <input type="number" name="quantite" id="quantite" value="0" max="10000" class='form-control'>
                    </div>
                    <div class="mb-3">
                        <label for="prix">Prix</label>
                        <input type="number" name="prix" id="prix" value="" max="10000" class='form-control'>
                    </div>
                    <div class="mb-3">
                        <label for="image_produit">Lien de l'image du produit</label>
                        <input type="text" name="image_produit" id="image_produit" value="" class='form-control'>
                    </div>
                    <div class="mb-3">
                        <label for="description_produit">Description</label>
                        <textarea name="description_produit" id="description_produit" class='form-control'></textarea>
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
 
  <?php include_once('footer.php'); ?>