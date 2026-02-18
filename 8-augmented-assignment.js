// ==============================
// AUGMENTED ASSIGNMENT OPERATOR
// ==============================

// Augmented assignment adalah operator singkat
// untuk melakukan operasi matematika sekaligus assignment

// Format umum:
// variabel operator= nilai
// contoh: result += 5
// artinya: result = result + 5


// Inisialisasi variabel
let result = 10;

console.log(result); // 10


// += (penjumlahan lalu assignment)
// result += 5 artinya result = result + 5

result += 5;
console.log(result); // 15
// 10 + 5 = 15


// -= (pengurangan lalu assignment)
// result -= 3 artinya result = result - 3

result -= 3;
console.log(result); // 12
// 15 - 3 = 12


// *= (perkalian lalu assignment)
// result *= 2 artinya result = result * 2

result *= 2;
console.log(result); // 24
// 12 × 2 = 24


// /= (pembagian lalu assignment)
// result /= 4 artinya result = result / 4

result /= 4;
console.log(result); // 6
// 24 ÷ 4 = 6


// %= (modulus lalu assignment)
// result %= 2 artinya result = result % 2

result %= 2;
console.log(result); // 0
// 6 % 2 = 0


// ==============================
// DAFTAR AUGMENTED ASSIGNMENT
// ==============================

// +=  → tambah lalu simpan
// -=  → kurang lalu simpan
// *=  → kali lalu simpan
// /=  → bagi lalu simpan
// %=  → modulus lalu simpan


// ==============================
// PERBANDINGAN BENTUK PANJANG vs SINGKAT
// ==============================

// bentuk panjang
result = result + 5;

// bentuk singkat
result += 5;


// ==============================
// KEUNTUNGAN
// ==============================

// - kode lebih singkat
// - lebih mudah dibaca
// - lebih sering digunakan dalam programming modern
