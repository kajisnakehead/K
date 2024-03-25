document.addEventListener("DOMContentLoaded", function() {
    const header = `
        <header class="header-area header-sticky">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            <!-- ***** Logo Start ***** -->
                            <a href="index.html" class="logo">
                                <img src="assets/images/logo.png">
                            </a>
                            <!-- ***** Logo End ***** -->
                            <!-- ***** Menu Start ***** -->
                            <ul class="nav">
                                <li class="submenu">
                                    <a href="javascript:;">Wanita</a>
                                    <ul>
                                        <li><a href="wanita-baju.html">Baju Wanita</a></li>
                                        <li><a href="wanita-celana.html">Celana Wanita</a></li>
                                        <li><a href="wanita-aksesoris.html">Aksesoris Wanita</a></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:;">Pria</a>
                                    <ul>
                                        <li><a href="pria-baju.html">Baju Pria</a></li>
                                        <li><a href="pria-celana.html">Celana Pria</a></li>
                                        <li><a href="pria-aksesoris.html">Aksesoris Pria</a></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:;">Remaja</a>
                                    <ul>
                                        <li><a href="remaja-baju.html">Baju Remaja</a></li>
                                        <li><a href="remaja-celana.html">Celana Remaja</a></li>
                                        <li><a href="remaja-aksesoris.html">Aksesoris Remaja</a></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:;">Perlengkapan Bayi</a>
                                    <ul>
                                        <li><a href="bayi-baju.html">Baju Bayi</a></li>
                                        <li><a href="bayi-celana.html">Celana Bayi</a></li>
                                        <li><a href="bayi-aksesoris.html">Aksesoris Bayi</a></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:;">Perlengkapan Rumah</a>
                                    <ul>
                                        <li><a href="rumah-tamu.html">Ruang Tamu</a></li>
                                        <li><a href="rumah-dapur.html">Ruang Dapur</a></li>
                                        <li><a href="rumah-mandi.html">Kamar Mandi</a></li>
                                        <li><a href="rumah-halaman.html">Halaman Rumah</a></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:;">Perawatan</a>
                                    <ul>
                                        <li><a href="perawatan-kulit.html">Perawatan Kulit</a></li>
                                        <li><a href="perawatan-wajah.html">Perawatan Wajah</a></li>
                                    </ul>
                                </li>
                            </ul>        
                            <a class='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            <!-- ***** Menu End ***** -->
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    `;

    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = header;

    const body = document.querySelector('body');
    body.prepend(headerContainer);
});
