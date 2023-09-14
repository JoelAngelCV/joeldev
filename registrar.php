<?php
$nombre = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$telefono = isset($_POST['phoneNumber']) ? $_POST['phoneNumber']:'';
$web = isset($_POST['websiteUrl']) ? $_POST['websiteUrl']:'';
$mensaje = isset($_POST['message']) ? $_POST['message']:'';

try{

    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=u126665404_opiniones', 'u126665404_joelangel', '3Elcambio?');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO contactojadev(nombre, email, telefono, web, mensaje) VALUES(?,?,?,?,?)');
    $pdo->bindParam(1, $nombre);
    $pdo->bindParam(2, $email);
    $pdo->bindParam(3, $telefono);
    $pdo->bindParam(4, $web);
    $pdo->bindParam(5, $mensaje);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error){
    echo $error->getMessage();
    die();
}