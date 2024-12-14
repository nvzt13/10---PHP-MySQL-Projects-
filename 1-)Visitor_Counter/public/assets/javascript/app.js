const counter = document.getElementById("counter");
document.getElementById("silButton").addEventListener("click", function() {
  if(counter.innerHTML !== "0"){
      // Eğer kullanıcı onaylarsa sil.php dosyasına istek gönder
      fetch("../src/sil.php")
        .then(response => response.json()) // PHP'den gelen yanıtı JSON olarak parse et
        .then(data => {
          if (data.success) { // Eğer silme işlemi başarılıysa
            counter.innerHTML = "0";
            alert("Veriler başarıyla silindi.");
          } else {
            alert("Bir hata oluştu: " + data.error); // Hata mesajını göster
          }
        })
        .catch(error => {
          console.error("Bir hata oluştu:", error);
          alert("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        });
    }else{
      alert("Silinecek veri bulunamadı!")
    }  
  // Kullanıcıya onay mesajı göster
  
});
