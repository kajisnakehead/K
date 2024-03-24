document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.querySelector(".carousel");
    var slides = document.querySelectorAll(".slide");
    var totalSlides = slides.length;
    var currentIndex = 0;
    var visibleSlides = 3; // Jumlah slide yang ditampilkan
  
    function showSlides(startIndex) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (var i = startIndex; i < startIndex + visibleSlides; i++) {
        if (slides[i]) {
          slides[i].style.display = "inline-block";
        }
      }
    }
  
    function nextSlide() {
      if (currentIndex < totalSlides - visibleSlides) {
        currentIndex++;
      } else {
        currentIndex = 0; // Kembali ke slide pertama jika sudah mencapai slide terakhir
      }
      showSlides(currentIndex);
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - visibleSlides; // Pindah ke slide terakhir jika sudah berada di slide pertama
      }
      showSlides(currentIndex);
    }
  
    document.querySelector(".nextIndex").addEventListener("click", nextSlide);
    document.querySelector(".prevIndex").addEventListener("click", prevSlide);
  
    // Tampilkan tiga slide pertama pada awalnya
    showSlides(currentIndex);
  });
  