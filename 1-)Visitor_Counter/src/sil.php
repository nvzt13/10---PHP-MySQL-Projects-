<?php
// count_table tablosundaki tüm verileri sil
$sql = "DELETE FROM count_table";
try {
    $pdo->exec($sql);
    echo "Veriler başarıyla silindi";
} catch (PDOException $e) {
    echo "Hata: " . $e->getMessage();
}
?>
