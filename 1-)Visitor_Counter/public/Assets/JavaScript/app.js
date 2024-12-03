
document.getElementById("silButton").addEventListener("click", function() {
  // Kullanıcıya onay mesajı göster
  if (confirm("Tüm verileri silmek istediğinize emin misiniz?")) {
    // Eğer kullanıcı onaylarsa sil.php dosyasına istek gönder
    fetch('../../../src/sil.php')
      .then(response => response.json()) // PHP'den gelen yanıtı JSON olarak parse et
      .then(data => {
        if (data.success) { // Eğer silme işlemi başarılıysa
          alert("Veriler başarıyla silindi.");
        } else {
          alert("Bir hata oluştu: " + data.error); // Hata mesajını göster
        }
      })
      .catch(error => {
        console.error("Bir hata oluştu:", error);
        alert("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      });
  }
});
