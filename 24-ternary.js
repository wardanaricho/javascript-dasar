// ==============================
// TERNARY OPERATOR DI JAVASCRIPT
// ==============================

// Ternary operator adalah bentuk singkat dari if else

// Format:
// kondisi ? nilaiJikaTrue : nilaiJikaFalse;


// ==============================
// CONTOH DASAR
// ==============================

let nilai = 80;

// jika nilai >= 75 → "Lulus"
// jika tidak → "Tidak Lulus"

let hasil = nilai >= 75 ? "Lulus" : "Tidak Lulus";

console.log(hasil);
// Output: Lulus


// ==============================
// PENJELASAN CARA KERJA
// ==============================

// nilai >= 75 → true
// maka hasil = "Lulus"


// ==============================
// PERBANDINGAN DENGAN IF ELSE
// ==============================

// Ternary version:
let hasilTernary = nilai >= 75 ? "Lulus" : "Tidak Lulus";


// If else version:
let hasilIfElse;

if (nilai >= 75) {
    hasilIfElse = "Lulus";
} else {
    hasilIfElse = "Tidak Lulus";
}

console.log(hasilTernary);
console.log(hasilIfElse);


// ==============================
// CONTOH LAIN
// ==============================

// cek genap / ganjil

let angka = 5;

let tipe = angka % 2 === 0 ? "Genap" : "Ganjil";

console.log(tipe);
// Output: Ganjil


// ==============================
// TERNARY BERTINGKAT
// ==============================

let score = 90;

let grade =
    score >= 90 ? "A" :
        score >= 80 ? "B" :
            score >= 70 ? "C" :
                "D";

console.log(grade);
// Output: A


// ==============================
// KESIMPULAN
// ==============================

// Ternary adalah versi singkat dari if else

// kondisi ? true : false
