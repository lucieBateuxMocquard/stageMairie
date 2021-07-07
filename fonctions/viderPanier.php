<?php
session_start();
function viderPanier() 
{
    print_r($_SESSION);
    unset($_SESSION['panier']);
    print_r($_SESSION);
}
viderPanier();
?>