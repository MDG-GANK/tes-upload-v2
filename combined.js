// File: /mnt/data/extracted_files/isi-nama-kamu-disini-yaaa/1.Isi nama/script.js
function submitName() {
    let name = document.getElementById('nameInput').value.trim();
    if (name === '') {
        alert("Masukkan nama terlebih dahulu!");
    } else {
        localStorage.setItem("userName", name); // Simpan nama j>
        window.location.href = "heart.html"; // Arahkan ke halam>
    }
}

// File: /mnt/data/extracted_files/isi-nama-kamu-disini-yaaa/2.heart/heart.js
setTimeout(() => {
    document.body.style.backgroundColor = "pink"; // Ubah warna latar belakang
    document.querySelector(".heart").style.display = "none"; // Sembunyikan hati

    // Tampilkan pertanyaan setelah animasi selesai
    const questionContainer = document.querySelector(".question-container");
    questionContainer.style.display = "flex";

    // Ambil nama pengguna dari localStorage
    let userName = localStorage.getItem("userName") || "Kamu";
    document.getElementById("greeting").innerText = `Hai, ${userName} gimana hari ini, se>
}, 3000);

// Fungsi untuk menangani klik tombol
function response(answer) {
    if (answer === "sehat") {
        window.location.href =
"sehat.html"; // pindah ke halaman sehat
    } else {
        window.location.href =
"sakit.html"; // pindah ke halaman sakit
    }
}

// File: /mnt/data/extracted_files/isi-nama-kamu-disini-yaaa/4.sakit/sakit.js
document.addEventListener("DOMContentLoaded", function() {
    let userName = localStorage.getItem("userName") || "Kamu";
    document.getElementById("sakitMessage").innerHTML = `
        KALO LAGI SAKIT DI MINUM YAAA OBAT NYA, SEBELUM MINUM OBAT MAKAN DULU,
        JANGAN BEGADANG DULU SOALNYA LAGI SAKIT, PERBANYAK ISTIRAHAT DAN TIDUR,
        JANGAN BANYAK AKTIVITAS YANG BERAT BERAT BIAR TUBUH BISA ISTIRAHAT,
        SEMOGA CEPAT SEMBUH YAAAA ${userName.toUpperCase()}
    `;
});

// File: /mnt/data/extracted_files/isi-nama-kamu-disini-yaaa/3sehat/sehat.js
document.addEventListener("DOMContentLoaded", function() {
    let userName = localStorage.getItem("userName") || "Kamu";
    document.getElementById("sehatMessage").innerHTML = `
        ALHAMDULILLAH SEHAT <br>
        JAGA KESEHATAN, <br>
        JANGAN BANYAK BANYAK BEGADANG, <br>
        JANGAN KESERINGAN MAKAN YANG MANIS-MANIS DAN YANG ASIN-ASIN, <br>
        SOALNYA KALO GINJAL UDAH RUSAK NANTI RIBET HIDUP MU HARUS CUCI DARAH 2× DALAM SEM>
        INTINYA JAGA KESEHATAN KAMU YAAA ${userName.toUpperCase()}
    `;
});
