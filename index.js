// Fungsi ini berjalan ketika kotak produk diklik di HTML
function bukaDetail(namaProduk, urlGambar) {
    // 1. Sembunyikan Halaman Utama
    document.getElementById('halaman-utama').style.display = 'none';
    
    // 2. Tampilkan Halaman Detail (display flex agar sejajar)
    document.getElementById('halaman-detail').style.display = 'flex';
    
    // 3. Masukkan teks deskripsi dan sembunyikan teks default
    document.getElementById('teks-deskripsi-default').style.display = 'none';
    let textNode = document.getElementById('nama-produk-teks');
    textNode.innerText = "Ini adalah spesifikasi untuk " + namaProduk;
    textNode.style.display = 'block';
    
    // 4. Masukkan gambar dan sembunyikan teks default
    document.getElementById('teks-gambar-default').style.display = 'none';
    let imgNode = document.getElementById('gambar-produk-detail');
    imgNode.src = urlGambar;
    imgNode.style.display = 'block';
}

// Fungsi ini berjalan ketika tombol "BUTTON KEMBALI" diklik
function kembaliKeUtama() {
    // 1. Sembunyikan Halaman Detail
    document.getElementById('halaman-detail').style.display = 'none';
    
    // 2. Tampilkan kembali Halaman Utama
    document.getElementById('halaman-utama').style.display = 'flex';
    
    // 3. Kembalikan teks placeholder wireframe seperti semula
    document.getElementById('teks-deskripsi-default').style.display = 'block';
    document.getElementById('nama-produk-teks').style.display = 'none';
    
    document.getElementById('teks-gambar-default').style.display = 'block';
    document.getElementById('gambar-produk-detail').style.display = 'none';
}