<?php
// Inclure le fichier de configuration de la base de données
include 'config.php';

// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $phonenumber = $_POST['phonenumber'];
    $email = $_POST['email'];
    $flocation = $_POST['flocation'];

    // Préparer la requête d'insertion
    $sql = "INSERT INTO users (firstname, lastname, phonenumber, email, flocation) VALUES ('$firstname', '$lastname', '$phonenumber','$email','$flocation')";

    // Exécuter la requête
    if ($connexion->query($sql) === TRUE) {
        echo "Enregistrement effectué avec succès !";
    } else {
        echo "Erreur : " . $sql . "<br>" . $connexion->error;
    }
}

// Fermer la connexion à la base de données
$connexion->close();
?>
