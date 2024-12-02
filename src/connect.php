<?php
// PDO bağlantısı
$dsn = 'mysql:host=127.0.0.1;dbname=count';
$user = 'root';
$password = '1313';

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('SET NAMES utf8'); // Karakter seti ayarlama
} catch (PDOException $e) {
    echo 'Bağlantı hatası: ' . $e->getMessage();
}
?>