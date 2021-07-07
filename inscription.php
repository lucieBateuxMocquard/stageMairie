<?php 
session_start();
  include_once('header.php'); 
  include_once('inscriptionReussite.php'); 
  include_once('comptes/coBDD.php');
  ?>

<h1 class="text-center ">Inscription</h1>
<div class="container">
  <div class="row">
    <div class="col">
      <form method="post" action="inscription.php" class="bg-light mt-5 border p-3">
        <div class="row mb-3">
          <div class="col-sm-6">
            <label for="prenom">Prenom</label>
            <input type="text" name="prenom" id="prenom" value="" class='form-control'>
          </div>
          <div class="col-sm-6">
                <label for="nom">Nom</label>
                <input type="text" name="nom" id="nom" value="" class='form-control'>
            </div>         
        </div>

        <div class="row mb-3">
          <div class="col-sm-6">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" value="" class='form-control'>
          </div>
          <div class="col-sm-6">
              <label for="telephone">Telephone</label>
              <input type="text" name="telephone" id="telephone" value="" class='form-control'>
          </div>            
        </div>

        <div class="row mb-3 p-3">
            <label for="adresse">Adresse</label>
            <input type="text" name="adresse" id="adresse" value="" class='form-control'>
        </div>

        <div class="row mb-3">
            <div class="col-sm-6">
                <label for="mdp">Mot de passe</label>
                <input type="password" name="mdp" id="mdp" value="" class='form-control'>
            </div>
            <div class="col-sm-6">
                <label for="confirme_mdp">Confirmation mot de passe</label>
                <input type="password" name="confirme_mdp" id="confirme_mdp" value="" class='form-control'>
            </div>
        </div>
     
        <div class="row mb-3">
            <div class="col-12">
                <hr>
                <button type="submit" class="btn btn-primary w-100"> Inscription</button>
            </div>
        </div>
    </form>
  </div>
</div>

<?php include_once('footer/footer.php');?>

<?php
            if(empty($_POST)) {

              exit(0);
            }
            $prenom = $_POST["prenom"];
            $nom = $_POST["nom"];
            $email = $_POST["email"];
            $telephone = $_POST["telephone"];
            $adresse = $_POST["adresse"];
            $mdp = $_POST["mdp"];
            $confirme_mdp = $_POST["confirme_mdp"];
            
            
     
                //On insère les données reçues si les champs sont remplis
                if(!empty($prenom) && !empty($nom) && !empty($email) && !empty($telephone) && !empty($mdp) && !empty($confirme_mdp)){
                  $resultat = $conn->prepare("
                        INSERT INTO compte_client(prenom_compte_client, nom_compte_client, email_compte_client, tel_compte_client, adresse_compte_client, mdp_compte_client)
                        VALUES(:prenom, :nom, :email, :telephone, :adresse, :mdp)"); 
                                     
                    $resultat->bindParam(':prenom',$prenom);
                    $resultat->bindParam(':nom',$nom);
                    $resultat->bindParam(':email',$email);
                    $resultat->bindParam(':telephone',$telephone);
                    $resultat->bindParam(':adresse',$adresse);
                    $resultat->bindParam(':mdp', password_hash($mdp, PASSWORD_DEFAULT));
                    //$resultat->debugDumpParams();
                    $resultat->execute();
                    return('inscriptionReussite.php');
                }

               
                // echo($prenom);
                // //On récupère les infos de la table 
                // $resultat = $conn->prepare("SELECT * FROM compte_client");
                // $resultat->execute();
                // //On affiche les infos de la table
                // $resu = $resultat->fetchAll(PDO::FETCH_ASSOC);
                // echo(json_encode($resu));
                // $keys = array_keys($resu);
                // for($i = 0; $i < count($resu); $i++){
                //     $n = $i + 1;
                //     echo 'Utilisateur n°' .$n. ' :<br>';
                //     foreach($resu[$keys[$i]] as $key => $value){
                //         echo $key. ' : ' .$value. '<br>';
                //     }
                //     echo '<br>';
                // }
        ?>

