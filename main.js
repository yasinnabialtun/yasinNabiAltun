/*Cursor*/
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
/*Cursor Finish*/

/*Anasayfaya Dön*/

// Sayfa yüklendikten sonra belirli bir süre sonra butonu göster
window.addEventListener("load", function () {
  var backToTopButton = document.getElementById("back-to-top");
  backToTopButton.style.top = "-100px"; // Butonu yukarı taşı
});

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");

  // Sayfa yukarıda ise butonu gizle
  if (window.scrollY === 0) {
    backToTopButton.style.top = "-100px"; // Butonu yukarı taşı
  }
  // Sayfa aşağıda ise butonu göster
  else {
    backToTopButton.style.top = "20px"; // Butonu aşağı taşı
  }
});

/*Son*/

/*Whatsapp*/
function openWhatsApp() {
  // WhatsApp'a yönlendirmek için özel URL kullanılır
  var phoneNumber = "905421367056"; // Telefon numarasını burada değiştirin
  var message = "Merhaba, size bir mesaj göndermek istiyorum."; // İstediğiniz mesajı burada belirtin
  var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL);
}
