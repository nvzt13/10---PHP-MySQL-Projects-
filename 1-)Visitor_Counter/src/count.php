<?php
    // IP adresini al ve ekle
    $ip = $_SERVER['REMOTE_ADDR'];
    $stmt = $pdo->prepare('INSERT INTO count_table (ip) VALUES (?)');
    $stmt->execute([$ip]);

    // Toplam sayıyı hesapla
    $stmt = $pdo->prepare('SELECT COUNT(id) FROM count_table');
    $stmt->execute();
    $count = $stmt->fetchColumn();

    echo $count;
?>
