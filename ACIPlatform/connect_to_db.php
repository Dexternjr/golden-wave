<?php
// Replace these variables with your actual database details
$host = 'localhost'; //  MySQL server hostname
$dbname = 'aicplatformdb'; // Your database name
$username = 'root@localhost'; // Your database username
$password = '10'; // Your database password

try {
    // Create a new PDO instance
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Enable error handling

    // You're connected! You can now execute queries or fetch data.
    echo "Connected to $dbname at $host successfully.";
} catch (PDOException $pe) {
    // Handle connection errors
    die("Could not connect to the database $dbname: " . $pe->getMessage());
}
?>

