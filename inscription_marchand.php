<?php 
session_start();
  include_once('header.php'); 
  // include_once('inscriptionReussite.php'); 
  include_once('comptes/coBDD.php');
  ?>

<?php 
  $prenom = '';
  $nom = '';
  $email = '';
  $mdp = '';
?>
<h1 class="text-center ">Inscription marchand</h1>
<hr>
<?php 

echo $msg; // affichage des messages pour l'utilisateur 
?> 

<div class="container">
  <div class="row">
    <div class="col">
      <form method="post" action="inscription_marchand.php" class="bg-light mt-5 border p-3">
        <div class="row mb-3">
          <div class="col-sm-6">
            <label for="prenom">Prenom</label>
            <input type="text" name="prenom" id="prenom" value="<?php echo $prenom; ?>" class='form-control'>
          </div>
          <div class="col-sm-6">
                <label for="nom">Nom</label>
                <input type="text" name="nom" id="nom" value="<?php echo $nom; ?>" class='form-control'>
            </div>         
        </div>

        <div class="row mb-3">
          <div class="col-sm-6">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" value="<?php echo $email; ?>" class='form-control'>
          </div>   

          <div class="col-sm-6">
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



<?php
            if(empty($_POST)) {

              exit(0);
            }
            if(!empty($_POST['prenom']) && !empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['mdp']) && !empty($_POST['confirme_mdp'])){

              // on récupère les informations du form dans des variables plus simple d'écriture et on applique un trim() pour enlever les espaces en début et en fin de chaine. 
              $prenom = trim($_POST["prenom"]);
              $nom = trim($_POST["nom"]);
              $email = trim($_POST["email"]);
              $mdp = trim($_POST["mdp"]);
              $confirme_mdp = trim($_POST["confirme_mdp"]);
              $boutique  = trim($_POST['boutique']);

              $erreur = 'non';// on crée une variable avec une valeur par défaut. Cette variable est une variable de controle, si on rentre dans un cas d'erreur, on change sa valeur. Puis en testant la valeur de cette variable on saura si elle a sa valeur initiale : il n'y a pas eu d'erreur dans nos controle en revanche, si sa valeur a changée, alors il y a eu des erreurs dans nos controles.
             
                //Vérifie si le format du prenom
                if (!preg_match('#^[a-zA-ZàáâãäåçèéêëìíîïðòóôõöùúûüýÿÂÊÎÔÛÄËÏÖÜÀÆæÇÉÈŒœÙ -]+$#', $prenom)) {
                  $erreur = 'oui';
                  $msg .= '<div class="alert alert-danger mb-3">Attention,le format du prénom incorrect</div>';
                } 

                //Vérifie si le format du Nom
                if (!preg_match('#^[a-zA-ZàáâãäåçèéêëìíîïðòóôõöùúûüýÿÂÊÎÔÛÄËÏÖÜÀÆæÇÉÈŒœÙ -]+$#', $nom)) {
                  $erreur = 'oui';
                  $msg .= '<div class="alert alert-danger mb-3">Attention, le format du nom incorrect</div>';
                } 

                // vérification du format de l'email
                if( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
                  // cas d'erreur
                  $erreur = 'oui';
                  $msg .= '<div class="alert alert-danger mb-3">Attention, Le format du mail est incorrect.</div>';
                }
                              
                // vérification si le mdp est vide
                if(empty($mdp)) {
                  // cas d'erreur
                  $erreur = 'oui';
                  echo '<div class="alert alert-danger mb-3"> Attention, Le champ mot de passe est obligatoire.</div>';
                }
                
                //Vérifie si le format du mdp est bon
                if(!preg_match('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@*\#$%-]).{8,20})', $mdp) || !preg_match('#^[a-zA-Z0-9àáâãäåçèéêëìíîïðòóôõöùúûüýÿÂÊÎÔÛÄËÏÖÜÀÆæÇÉÈŒœÙ@*\#$%-]+$#', $mdp)) {                  
                  // cas d'erreur                  
                  $erreur = 'oui';                  
                  echo '<div class="alert alert-danger mb-3"> Attention, il faut 8 à 20 caractères, au moins une majuscule, au moins une minuscule, au moins un chiffre, au moins un caractère spécial parmis : @ * \ # $ % sans mettre d\'espace</div>';
                }                

                // vérification entre mdp et confirm_mdp
                if($mdp != $confirme_mdp) {
                  // cas d'erreur
                  $erreur = 'oui';
                  $msg .= '<div class="alert alert-danger mb-3">Attention, Les mots de passes ne sont pas identiques.</div>';
                }

                //echo $erreur;
                //On insère les données reçues si les champs sont remplis
                if($erreur == 'non') {
                  // création d'unne variable pour hasher le mdp
                  $password_hash = password_hash($mdp, PASSWORD_DEFAULT);

                  $resultat = $conn->prepare("INSERT INTO compte_admin_boutique (prenom_admin_boutique, nom_admin_boutique, email_admin_boutique, id_boutique,  mdp_admin_boutique)
                      VALUES(:prenom, :nom, :email, :boutique, :mdp)"); 
                                    
                  $resultat->bindParam(':prenom',$prenom);
                  $resultat->bindParam(':nom',$nom);
                  $resultat->bindParam(':email',$email);
                  $resultat->bindParam(':boutique', $boutique);
                  $resultat->bindParam(':mdp',/* cryptage du mdp */$password_hash);
                  //$resultat->debugDumpParams();
                  $resultat->execute();
                  return('inscriptionReussite.php');
                }

               
           }
           else{
            $erreur = 'oui';
            $msg .= '<div class="alert alert-danger mb-3">Veillez remplir tous les champs.</div>';
            
           }
           echo $msg;
          //  $prenom = $_POST["prenom"];
            // $nom = $_POST["nom"];
            // $email = $_POST["email"];
            // $mdp = $_POST["mdp"];
            // $confirme_mdp = $_POST["confirme_mdp"];
            
            
     
                //On insère les données reçues si les champs sont remplis
                // if(!empty($prenom) && !empty($nom) && !empty($email) && !empty($mdp) && !empty($confirme_mdp)){
                  // $resultat = $conn->prepare("
                        // INSERT INTO compte_admin_boutique(prenom_admin_boutique, nom_admin_boutique, email_admin_boutique, mdp_admin_boutique)
                        // VALUES(:prenom, :nom, :email, :mdp)"); 
                                     
                    // $resultat->bindParam(':prenom',$prenom);
                    // $resultat->bindParam(':nom',$nom);
                    // $resultat->bindParam(':email',$email);
                    // $resultat->bindParam(':mdp', password_hash($mdp, PASSWORD_DEFAULT));
                    //$resultat->debugDumpParams();
                    // $resultat->execute();

                    // echo "Inscription réusite !";
                    // return('inscriptionReussite.php');
                // }
              
?>

<?php include_once('footer.php');?>
        