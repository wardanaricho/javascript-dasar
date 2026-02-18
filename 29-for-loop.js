// ==============================
// FOR LOOP DI JAVASCRIPT
// ==============================

// for loop digunakan untuk mengulang kode beberapa kali


// ==============================
// STRUKTUR FOR LOOP
// ==============================

// for (init; condition; post) {
//     kode yang diulang
// }


// penjelasan:
// init      → dijalankan sekali di awal
// condition → dicek sebelum setiap perulangan
// post      → dijalankan setiap selesai satu perulangan


// ==============================
// CONTOH LOOP TANPA BATAS (INFINITE LOOP)
// ==============================

// HATI-HATI: ini akan berjalan selamanya

// for (; ;) {
//     console.log("*");
// }


// ==============================
// CONTOH DENGAN KONDISI SAJA
// ==============================

// let counter = 1;

// for (; counter <= 10; ) {
//     console.log(counter);
//     counter++;
// }


// ==============================
// CONTOH DENGAN INIT DAN CONDITION
// ==============================

// for (let counter = 1; counter <= 10; ) {
//     console.log(counter);
//     counter++;
// }


// ==============================
// CONTOH LENGKAP (INIT, CONDITION, POST)
// ==============================

for (let counter = 1; counter <= 10; counter++) {

    console.log(counter);

}


// ==============================
// CARA KERJA LOOP DI ATAS
// ==============================

// langkah 1:
// counter = 1

// langkah 2:
// cek counter <= 10 → true

// langkah 3:
// jalankan console.log(counter)

// langkah 4:
// counter++ → counter + 1

// ulangi sampai counter > 10


// ==============================
// OUTPUT
// ==============================

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// ==============================
// CONTOH LAIN
// ==============================

// loop mundur

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// loop kelipatan 2

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


// ==============================
// KESIMPULAN
// ==============================

// for loop digunakan untuk perulangan
// init → awal
// condition → syarat loop berjalan
// post → perubahan nilai setiap loop
