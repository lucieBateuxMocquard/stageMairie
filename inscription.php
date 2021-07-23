<?php 
session_start();
  include_once('header.php'); 
  include_once('inscriptionReussite.php'); 
  include_once('comptes/coBDD.php');
  ?>
<?php 
$prenom = '';
$nom = '';
$email = '';
$telephone = '';
$adresse = ''; 
?>

<h1 class="text-center ">Inscription</h1>
<div class="container">
  <div class="row">
    <div class="col">
      <form method="post" action="inscription.php" class="bg-light mt-5 border p-3">
        <div class="row mb-3">
          <div class="col-sm-6">
            <label for="prenom">Prenom</label>
            <input type="text" name="prenom" id="prenom" value="<?php echo $prenom ?>" class='form-control'>
          </div>
          <div class="col-sm-6">
                <label for="nom">Nom</label>
                <input type="text" name="nom" id="nom" value="<?php echo $nom ?>" class='form-control'>
            </div>         
        </div>

        <div class="row mb-3">
          <div class="col-sm-6">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" value="<?php echo $email ?>" class='form-control'>
          </div>
          <div class="col-sm-6">
              <label for="telephone">Telephone</label>
              <input type="text" name="telephone" id="telephone" value="<?php echo $telephone ?>" class='form-control'>
          </div>            
        </div>

        <div class="row mb-3 p-3">
            <label for="adresse">Adresse</label>
            <input type="text" name="adresse" id="adresse" value="<?php echo $adresse ?>" class='form-control'>
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
echo 'Coucou';
            if(empty($_POST)) {

              exit(0);
            }
            if(isset($_POST['prenom']) && isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['telephone']) && isset($_POST['adresse']) && isset($_POST['mdp']) && isset($_POST['confirme_mdp'])){

            // on récupère les informations du form dans des variables plus simple d'écriture et on applique un trim() pour enlever les espaces en début et en fin de chaine. 
            $prenom = trim($_POST["prenom"]);
            $nom = trim($_POST["nom"]);
            $email = trim($_POST["email"]);
            $telephone = trim($_POST["telephone"]);
            $adresse = trim($_POST["adresse"]);
            $mdp = trim($_POST["mdp"]);
            $confirme_mdp = trim($_POST["confirme_mdp"]);

            $erreur = 'non';// on crée une variable avec une valeur par défaut. Cette variable est une variable de controle, si on rentre dans un cas d'erreur, on change sa valeur. Puis en testant la valeur de cette variable on saura si elle a sa valeur initiale : il n'y a pas eu d'erreur dans nos controle en revanche, si sa valeur a changée, alors il y a eu des erreurs dans nos controles.
            echo $erreur;
              // vérification du format de l'email
              if( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
                // cas d'erreur
                $erreur = 'oui';
                echo '<div class="alert alert-danger mb-3">Attention,<br>Le format du mail est incorrect.</div>';
              }

              // vérification si le mdp est vide
              if(empty($mdp)) {
                // cas d'erreur
                $erreur = 'oui';
                echo '<div class="alert alert-danger mb-3"> Attention,<br>Le champ mot de passe est obligatoire.</div>';
              }
              
              // vérification entre mdp et confirm_mdp
              if($mdp != $confirme_mdp) {
                // cas d'erreur
                $erreur = 'oui';
                echo '<div class="alert alert-danger mb-3">Attention,<br>Les mots de passe ne sont pas identiques.</div>';
              }

              echo $erreur;
                //On insère les données reçues si les champs sont remplis
                if($erreur == 'non') {
                  $resultat = $conn->prepare("INSERT INTO compte_client(prenom_compte_client, nom_compte_client, email_compte_client, tel_compte_client, adresse_compte_client, mdp_compte_client)
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

                echo $erreur;
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
           }
        ?>



