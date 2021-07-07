<?php

if (isset($_GET['prenom']) AND isset($_GET['nom']) && isset($_GET['repeter'])) // On a le nom et le prénom
{
	$_GET['repeter'] = (int) $_GET['repeter'];

		if($_GET['repeter']>= 1 && $_GET['repeter'] <= 100 )
		{
			for($i=0; $i < $_GET['repeter']; $i++)
			{
				echo $i.' Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !</br>';
			}
		}
	else // Il manque des paramètres, on avertit le visiteur
	{
		echo 'Il faut renseigner un nom, un prénom et une répétition valide !';
	}
}
else // Il manque des paramètres, on avertit le visiteur
{
	echo 'Il faut renseigner un nom, un prénom et une répétition !';
}
?> 