<?php
// Informations de connexion à la base de données
$serveur = '127.0.0.1'; // Adresse du serveur MySQL
$utilisateur = 'root'; // Nom d'utilisateur MySQL
$mot_de_passe = ''; // Mot de passe MySQL
$base_de_donnees = 'goldendb'; // Nom de votre base de données

// Connexion à la base de données
$connexion = mysqli_connect($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);

// Vérification de la connexion
if (!$connexion) {
    die('Erreur de connexion : ' . mysqli_connect_error());
}
?>
