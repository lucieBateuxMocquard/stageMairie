<?php  
session_start();
  include_once('header.php'); 
  include_once('comptes/coBDD.php');
  ?>
    <?php
	if(isset($_POST['mailform'])) {
	   if(!empty($_POST['prenom']) AND !empty($_POST['nom']) AND !empty($_POST['email']) AND !empty($_POST['objet'])  AND !empty($_POST['message'])) {
	      $header="MIME-Version: 1.0\r\n";
	      $header.='From:"nom_d\'expediteur"<lucie.mocquard@gmail.com>'."\n";
	      $header.='Content-Type:text/html; charset="uft-8"'."\n";
	      $header.='Content-Transfer-Encoding: 8bit';
	      $message='
	      <html>
	         <body>
	            <div align="center">
	               <img src="http://www.primfx.com/mailing/banniere.png"/>
	               <br />
	               <u>Prenom de l\'expéditeur :</u>'.$_POST['prenom'].'<br />	               
	               <u>Nom de l\'expéditeur :</u>'.$_POST['nom'].'<br />
	               <u>Email de l\'expéditeur :</u>'.$_POST['email'].'<br />
                 <u>Objet de l\'expéditeur :</u>'.$_POST['objet'].'<br />
	               <br />
	               '.nl2br($_POST['message']).'
	               <br />
	               <img src="http://www.primfx.com/mailing/separation.png"/>
	            </div>
	         </body>
	      </html>
	      ';
	      mail("lucie.mocquard@gmail.com", "Sujet du message", $message, $header);
	      $msg="Votre message a bien été envoyé !";
	   } else {
	      $msg="Tous les champs doivent être complétés !";
	   }
	}
	?>


    <h1 class="text-center" >Contact</h1>
  
    <div class="container">
  <div class="row">
    <div class="col">
      <form method="post" action="contact.php" class="mt-5 border p-3">
        <div class="row mb-3">
          <div class="col-sm-6">
            <label for="prenom">Prenom</label>
            <input type="text" name="prenom" id="prenom" value="" class='form-control'>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-6">
              <label for="nom">Nom</label>
              <input type="text" name="nom" id="nom" value="" class='form-control'>
          </div>         
        </div>

        <div class="row mb-3">
          <div class="col-sm-6">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" value="" class='form-control'>
          </div>           
        </div>

        <div class="row mb-3 ">
          <div class="col-sm-6">
              <label for="objet">objet</label>
              <input type="text" name="objet" id="objet" value="" class='form-control'>
          </div>
        </div>

        <div class="row mb-3">
            <div class="col-sm-6">
                <label for="message">Message :</label>
                <textarea  name="message" id="message" value="" class='form-control'></textarea>
            </div>
        </div>
     
        <div class="row mb-3">
            <div class="col-sm-6">
                <hr>
                <button type="submit" class="btn btn-primary w-100" name="mailform"> Envoyer</button>
            </div>
        </div>
    </form>
  </div>
</div>
</div>
<?php include_once('footer.php'); ?>

<?php if(isset($msg)) {
	         echo $msg;
	      }
	      ?>   


  <?php
            if(empty($_POST)) {

              exit(0);
            }
            $prenom = $_POST["prenom"];
            $nom = $_POST["nom"];
            $email = $_POST["email"];
            $objet = $_POST["objet"];
            $message = $_POST["message"];
         
            
            
     
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
                    return('connexionReussite.php');
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

