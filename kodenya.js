// FITUR 1: Welcoming Speech (Sapaan Selamat Datang)
// Muncul otomatis saat halaman selesai dimuat
window.onload = function() {
    let namaUser = prompt("Selamat datang! Silakan masukkan nama Anda:");
    
    // Jika user mengisi nama, ganti teks 'Guest' di HTML
    if (namaUser != null && namaUser != "") {
        document.getElementById("user-name").innerText = namaUser;
    }
}

// FITUR 2: Validasi & Menampilkan Hasil Form "Message Us"
const formPesan = document.getElementById('messageForm');
const areaHasil = document.getElementById('output-content');

formPesan.addEventListener('submit', function(event) {
    // Mencegah halaman refresh saat tombol submit diklik
    event.preventDefault();

    // Mengambil data dari setiap input
    const nama = document.getElementById('input-name').value;
    const tglLahir = document.getElementById('input-birth').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('input-msg').value;
    
    // Mengambil waktu saat ini
    const waktuSekarang = new Date().toLocaleString('id-ID');

    // Menampilkan data ke kotak hasil di sebelah form
    areaHasil.innerHTML = `
        <div style="color: #333; font-style: normal;">
            <p><strong>Waktu:</strong> ${waktuSekarang}</p>
            <hr style="margin: 10px 0;">
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Tanggal Lahir:</strong> ${tglLahir}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        </div>
    `;

    alert("Pesan Anda berhasil dikirim dan ditampilkan!");
});