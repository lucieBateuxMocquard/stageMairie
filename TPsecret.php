<?php

if(isset($_GET['password'])&& $_GET['password'] == 'kangourou')
{
  echo 'Bravo vous pouvez voir les message secret de la NASA !';
}
else
{
  echo 'Vous n\'avez pas l\'autorisation pour accèder à cette page. '; 
}

?>