// fungsi untuk mengarahkan pengguna ke halaman HTML lain
function gotoDetailPage(imageURL) {
    console.log("Menuju halaman baru dengan gambar: " + imageURL);
    // Ganti "halaman-baru.html" dengan alamat halaman HTML yang Anda inginkan
    window.location.href = "perawatan-wajah.html?image=" + encodeURIComponent(imageURL);
}

document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.querySelector(".carousel2");
    var slides = []; // Array untuk menyimpan URL gambar
    var totalSlides = 0;
    var currentIndex = 0;
    var visibleSlides = 3; // Jumlah slide yang ditampilkan
  
    // Fungsi untuk mengambil URL gambar dari file CSV
    fetch('assets/database/perawatan-wajah.csv')
    .then(response => response.text())
    .then(data => {
        // Parse data CSV
        var rows = data.split('\n');
        rows.forEach(row => {
            var columns = row.split(',');
            var imageURL = columns[0]; // Kolom pertama adalah URL gambar
            slides.push(imageURL); // Masukkan URL gambar ke dalam array slides
        });

        totalSlides = slides.length; // Update jumlah total slide
        showSlides(currentIndex); // Tampilkan slide pertama setelah mendapatkan data
    });
  
    // Di dalam fungsi showSlides()

function showSlides(startIndex) {
    // Kosongkan container Carousel
    carousel.innerHTML = '';

    // Tampilkan slide-slide berdasarkan URL gambar yang sudah diambil
    for (var i = startIndex; i < startIndex + visibleSlides; i++) {
        if (slides[i]) {
            var slide = document.createElement("div");
            slide.classList.add("slide");

            var image = document.createElement("img");
            image.src = slides[i];
            image.alt = "Gambar " + (i + 1); // Alt gambar bisa disesuaikan sesuai kebutuhan

            // Tambahkan atribut onclick untuk mengarahkan ke halaman HTML lain
            image.setAttribute("onclick", "gotoDetailPage('" + slides[i] + "')");

            slide.appendChild(image);
            carousel.appendChild(slide);
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
  
    document.querySelector(".nextIndex1").addEventListener("click", nextSlide);
    document.querySelector(".prevIndex1").addEventListener("click", prevSlide);
});
