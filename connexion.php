<?php 
session_start();
  include_once('header.php');
  include_once('comptes/coBDD.php'); 
  include_once('fonctions/fonction-connexion.php');
  ?>
   
   <?php





if (!empty($_POST))
{
  
  if (isset($_POST['mdp']) && isset($_POST['email']))  
  {  

    $mdp = $_POST['mdp'];
    $email = $_POST['email'];

    // $mdp_compte_client = $conn->query("SELECT mdp_compte_client FROM compte_client WHERE email_compte_client=".$email); 
    // stmt c'est requete preparer
    // ? pour dire qu'il y a un element inconnu
    $stmt=$conn->prepare("SELECT mdp_compte_client, id_compte_client FROM compte_client WHERE email_compte_client=?");   
    $stmt->execute([$email]);

    $info_compte_client=$stmt->fetch();

    if (password_verify($mdp, $info_compte_client['mdp_compte_client']))
    {
      $_SESSION['email']=$email;
      
      $_SESSION['id_compte_client']=$info_compte_client['id_compte_client'];

      echo 'bon mdp !';  
    }

    else {
      echo 'mauvais mdp ou compte inexistant';
    }
  
  }
}
?>

<h1 class="text-center">Connexion</h1>

<div class="container w-50 p-3">
 

      <form method="post" action="connexion.php" id="loginclient" class="bg-light mt-5 border p-3">
       
       
          <div class="col-sm-6 m-auto">
            <label for="email">Email</label>
            <input type="text" name="email" id="emailclient" value="" class='form-control'>
          </div>
          
          <div class="col-sm-6 m-auto">
              <label for="mdp">Mot de passe</label>
              <input type="password" name="mdp" id="mdpclient" value="" class='form-control'>
          </div>
         

        <div class="col-mb-3 text-center">
        <button type="submit" form="loginclient" class="btn btn-success m-2 ">Success</button>
        </div>              
      </form>
    
 
</div>

 
<?php include_once('footer.php'); ?>