<?php
session_start();

// fonction pour vérifier si l'utilisateur est connecté
function user_is_connect() {

    if(isset($_SESSION['membre'])) {
        return true; // ok connecté
    } else {
        return false; // nok pas connecté
    }    

}