// ==============================
// MASALAH VAR DI JAVASCRIPT
// ==============================

// var memiliki function scope, BUKAN block scope

// artinya var tidak terbatas pada {} seperti let atau const


// deklarasi global
var i = 0;


// loop
for (var i = 0; i < 5; i++) {

    // ini BUKAN local variable
    // ini menggunakan variable global yang sama

    console.log(`Local i = ${i}`);

}


// setelah loop selesai
console.log(`Global i = ${i}`);


// ==============================
// OUTPUT
// ==============================

// Local i = 0
// Local i = 1
// Local i = 2
// Local i = 3
// Local i = 4
// Global i = 5


// ==============================
// KENAPA GLOBAL i MENJADI 5?
// ==============================

// karena var hanya punya 1 variable i

// var i = 0;  → global

// for(var i = 0; ...) → menggunakan variable yang sama

// setelah loop selesai:
// i = 5


// ==============================
// VISUALISASI MEMORY
// ==============================

// hanya ada satu i:

// i = 0
// i = 1
// i = 2
// i = 3
// i = 4
// i = 5  ← selesai loop


// ==============================
// SOLUSI: GUNAKAN let
// ==============================

// let memiliki block scope

let j = 0;

for (let j = 0; j < 5; j++) {

    console.log(`Local j = ${j}`);

}

console.log(`Global j = ${j}`);


// OUTPUT:
// Local j = 0
// Local j = 1
// Local j = 2
// Local j = 3
// Local j = 4
// Global j = 0


// sekarang variable berbeda


// ==============================
// PERBEDAAN VAR vs LET
// ==============================

// var:
// ❌ tidak punya block scope
// ❌ bisa menyebabkan bug

// let:
// ✅ punya block scope
// ✅ lebih aman


// ==============================
// REKOMENDASI MODERN JAVASCRIPT
// ==============================

// gunakan:
// const → default
// let → jika perlu berubah

// hindari var
