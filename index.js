function bukaDetail(namaProduk, urlGambar, deskripsi) {

    document.getElementById('halaman-utama').style.display = 'none';
    document.getElementById('halaman-detail').style.display = 'flex';
    document.getElementById('teks-deskripsi-default').style.display = 'none';
    let textNode = document.getElementById('nama-produk-teks');
    textNode.innerText = dataDeskripsi[namaProduk];
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

const dataDeskripsi = {
    'Produk 1': 'Sepatu Adidas Adezore ini sangat ringan dan nyaman. Cocok digunakan untuk lari jarak jauh maupun jarak dekat.',
    'Produk 2': 'Puma Dagger hadir dengan desain agresif dan cengkeraman sol yang kuat. Didesain khusus untuk lapangan basket.',
    'Produk 3': 'Puma Flourish dengan warna hijau neon yang mencolok. Memberikan kenyamanan maksimal untuk aktivitas olahraga harian.',
    'Produk 4': 'Nike Pegasus 1 adalah sepatu lari yang responsif dengan bantalan nyaman.',
    'Produk 5': 'Nike Sabrina 3 EP didesain untuk kelincahan dan performa tinggi di lapangan.',
    'Produk 6': 'Adidas Evo 2 memberikan dorongan ringan untuk kecepatan maksimal.'
};