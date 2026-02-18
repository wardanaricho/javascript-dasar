// ==============================
// IF ELSE STATEMENT DI JAVASCRIPT
// ==============================

// if else digunakan untuk menjalankan kode berdasarkan kondisi tertentu


// Variabel nama diinisialisasi dan diubah beberapa kali
let nama = "Richo";

nama = "Chuing";
// nilai berubah menjadi "Chuing"

nama = "Anjay";
// nilai terakhir adalah "Anjay"
// JavaScript hanya menggunakan nilai TERAKHIR


// ==============================
// STRUKTUR IF ELSE IF ELSE
// ==============================

if (nama === "Richo") {
    // kondisi 1: jika nama adalah "Richo"
    console.log("Hello Richo Anjay");

} else if (nama === "Chuing") {
    // kondisi 2: jika nama adalah "Chuing"
    console.log("Hello Chuing Anjay");

} else {
    // kondisi default: jika semua kondisi di atas false
    console.log("Anda bukan Richo atau Chuing");
}


// ==============================
// HASIL OUTPUT
// ==============================

// Karena nilai terakhir adalah:
// nama = "Anjay"

// Maka:
// nama === "Richo"  → false
// nama === "Chuing" → false

// Jadi masuk ke else

// Output:
// Anda bukan Richo atau Chuing


// ==============================
// CARA KERJA IF ELSE
// ==============================

// 1. cek kondisi if
// 2. jika false, cek else if
// 3. jika semua false, jalankan else


// ==============================
// CONTOH LAIN
// ==============================

let nilai = 80;

if (nilai >= 90) {
    console.log("Grade A");
} else if (nilai >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// ==============================
// KESIMPULAN
// ==============================

// if → kondisi pertama
// else if → kondisi tambahan
// else → kondisi default

// hanya satu blok yang dijalankan
