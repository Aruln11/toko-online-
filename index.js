function bukaDetail(namaProduk, urlGambar) {

    document.getElementById('halaman-utama').style.display = 'none';
    
    document.getElementById('halaman-detail').style.display = 'flex';
    
    document.getElementById('teks-deskripsi-default').style.display = 'none';
    let textNode = document.getElementById('nama-produk-teks');
    textNode.innerText = "Ini adalah spesifikasi untuk " + namaProduk;
    textNode.style.display = 'block';
    
    document.getElementById('teks-gambar-default').style.display = 'none';
    let imgNode = document.getElementById('gambar-produk-detail');
    imgNode.src = urlGambar;
    imgNode.style.display = 'block';
}

function kembaliKeUtama() {
    document.getElementById('halaman-detail').style.display = 'none';
    
    document.getElementById('halaman-utama').style.display = 'flex';
    
    document.getElementById('teks-deskripsi-default').style.display = 'block';
    document.getElementById('nama-produk-teks').style.display = 'none';
    
    document.getElementById('teks-gambar-default').style.display = 'block';
    document.getElementById('gambar-produk-detail').style.display = 'none';
}