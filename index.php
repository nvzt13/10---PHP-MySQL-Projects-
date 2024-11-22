<?php
    $baglan = mysqli_connect("localhost","root","","counter");
    mysqli_set_charset($baglan,"utf8");
    $ip = $_SERVER["REMOTE_ADDR"];

    $veri_ekle = "INSERT INTO count_table (ip)  VALUES ('$ip')";
    mysqli_query($baglan,$veri_ekle);

    $hesapla = "SELECT  COUNT(id) FROM count_table";
    $kod = mysqli_query($baglan,$hesapla);

    $yaz = mysqli_fetch_array($kod);
    echo $yaz[0];
?>