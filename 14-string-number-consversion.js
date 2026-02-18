// ==============================
// KONVERSI STRING KE NUMBER
// ==============================

// Jika string dan number dijumlahkan,
// JavaScript akan melakukan STRING CONCATENATION, bukan penjumlahan

let first = "1";   // string
let second = 2;    // number

let result = first + second;

console.log(result);
// Output: "12"
// Karena "1" + 2 → "12"
// number 2 dikonversi menjadi string "2"


// ==============================
// KONVERSI MENGGUNAKAN parseInt()
// ==============================

// parseInt() digunakan untuk mengubah string menjadi integer (number)

result = parseInt(first) + second;

console.log(result);
// Output: 3
// parseInt("1") → 1
// 1 + 2 = 3


// ==============================
// NaN (Not a Number)
// ==============================

// NaN artinya "Bukan Angka"
// Terjadi jika konversi gagal

let angka = "angka";

console.log(parseInt(angka));
// Output: NaN
// Karena "angka" bukan number


// ==============================
// KONVERSI MENGGUNAKAN Number()
// ==============================

// Number() juga digunakan untuk konversi string ke number

let angkaPertama = Number("salah"); // gagal konversi → NaN
let angkaKedua = 2;

console.log(angkaPertama + angkaKedua);
// Output: NaN
// NaN + apapun = NaN


// ==============================
// CEK NaN MENGGUNAKAN isNaN()
// ==============================

// isNaN() digunakan untuk mengecek apakah nilai adalah NaN

console.log(isNaN(angkaPertama));
// Output: true

console.log(isNaN(angkaKedua));
// Output: false


// ==============================
// CARA KONVERSI STRING KE NUMBER
// ==============================

// parseInt() → integer
console.log(parseInt("123")); // 123

// parseFloat() → desimal
console.log(parseFloat("123.45")); // 123.45

// Number() → integer / desimal
console.log(Number("123")); // 123

// unary plus (+)
console.log(+"123"); // 123


// ==============================
// PERBEDAAN PENTING
// ==============================

// parseInt bisa membaca sebagian
console.log(parseInt("123abc")); // 123

// Number harus valid semua
console.log(Number("123abc")); // NaN


// ==============================
// KESIMPULAN
// ==============================

// "1" + 2 → "12" (string)
// parseInt("1") + 2 → 3 (number)

// NaN artinya konversi gagal
// gunakan isNaN() untuk cek NaN
