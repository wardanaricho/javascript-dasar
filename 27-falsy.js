// ==============================
// TRUTHY DAN FALSY DI JAVASCRIPT
// ==============================

// JavaScript akan mengkonversi nilai menjadi boolean
// saat digunakan dalam kondisi seperti if, while, dll

let data = "";

if (data) {
    console.log("Data is truthy");
} else {
    console.log("Data is falsy");
}

// Output:
// Data is falsy
// karena "" (string kosong) adalah falsy


/*
========================
APA ITU FALSY?
========================

Falsy adalah nilai yang dianggap false saat dikonversi ke boolean

Contoh:
Boolean("") → false
Boolean(0)  → false


========================
FALSY VALUES (HANYA 8)
========================

false        // boolean false

0            // number nol
-0           // negative zero

0n           // BigInt nol

""           // string kosong

null         // tidak ada nilai (intentional empty)

undefined    // belum diberi nilai

NaN          // Not a Number


========================
SEMUA SELAIN INI ADALAH TRUTHY
========================

Contoh truthy:

true

// number selain 0
1
-1
100

// string tidak kosong
" "
"0"
"false"
"Richo"

// object
{}

// array
[]

// function
function(){}

// dll


========================
CONTOH PRAKTIS
========================
*/

if ("Richo") {
    console.log("Truthy"); // dijalankan
}

if (0) {
    console.log("Tidak jalan"); // tidak dijalankan
}

if ([]) {
    console.log("Array kosong tetap truthy"); // dijalankan
}


/*
========================
KONVERSI KE BOOLEAN
========================
*/

console.log(Boolean(""));        // false
console.log(Boolean("Richo"));  // true

console.log(Boolean(0));        // false
console.log(Boolean(1));        // true

console.log(Boolean(null));     // false
console.log(Boolean({}));       // true


/*
========================
KEGUNAAN PRAKTIS
========================
*/

// cek apakah variabel ada isi

let username = "";

if (username) {
    console.log("Ada username");
} else {
    console.log("Username kosong");
}

// Output: Username kosong


/*
========================
KESIMPULAN INTI
========================

// FALSY hanya 8 nilai:

false
0
-0
0n
""
null
undefined
NaN


// selain itu adalah TRUTHY
*/
