<?php
include '../src/connect.php';

// count_table tablosundaki tüm verileri sil
$sql = "DELETE FROM count_table";
$response = [];

try {
    $pdo->exec($sql);
    $response['success'] = true;
    $response['message'] = "Veriler başarıyla silindi.";
} catch (PDOException $e) {
    $response['success'] = false;
    $response['error'] = "Hata: " . $e->getMessage();
}

// JSON formatında yanıt döndür
header('Content-Type: application/json');
echo json_encode($response);
?>