// ==============================
// OPERATOR PERBANDINGAN DI JAVASCRIPT
// ==============================

// Operator perbandingan digunakan untuk membandingkan dua nilai
// Hasilnya selalu boolean: true atau false


// ==============================
// LEBIH DARI (>)
// ==============================

let result = 5 > 3;
console.log(result); // true
// Karena 5 lebih besar dari 3


// ==============================
// KURANG DARI (<)
// ==============================

result = 5 < 3;
console.log(result); // false
// Karena 5 tidak lebih kecil dari 3


// ==============================
// LEBIH DARI SAMA DENGAN (>=)
// ==============================

result = 5 >= 3;
console.log(result); // true
// Karena 5 lebih besar dari 3


// ==============================
// KURANG DARI SAMA DENGAN (<=)
// ==============================

result = 5 <= 3;
console.log(result); // false
// Karena 5 tidak lebih kecil atau sama dengan 3


// ==============================
// SAMA DENGAN (==)
// ==============================

// Membandingkan hanya nilai, tidak tipe data

result = 5 == 3;
console.log(result); // false


// Contoh penting:
console.log(5 == "5"); // true
// Karena nilainya sama (string dikonversi ke number)


// ==============================
// SAMA DENGAN DAN TIPE DATA (===)
// ==============================

// Membandingkan nilai DAN tipe data

result = 5 === 3;
console.log(result); // false


// Contoh penting:
console.log(5 === "5"); // false
// Karena number !== string


// ==============================
// TIDAK SAMA DENGAN (!=)
// ==============================

// Membandingkan nilai saja

result = 5 != 3;
console.log(result); // true


// ==============================
// TIDAK SAMA DENGAN DAN TIPE DATA (!==)
// ==============================

// Membandingkan nilai DAN tipe data

result = 5 !== 3;
console.log(result); // true


// Contoh penting:
console.log(5 !== "5"); // true
// Karena tipe data berbeda


// ==============================
// DAFTAR OPERATOR PERBANDINGAN
// ==============================

// >   → lebih dari
// <   → kurang dari
// >=  → lebih dari sama dengan
// <=  → kurang dari sama dengan
// ==  → sama dengan (nilai saja)
// === → sama dengan (nilai dan tipe data)
// !=  → tidak sama dengan (nilai saja)
// !== → tidak sama dengan (nilai dan tipe data)


// ==============================
// REKOMENDASI BEST PRACTICE
// ==============================

// Gunakan === dan !==
// Hindari == dan !=
// karena == bisa menyebabkan bug akibat konversi tipe otomatis


// Contoh masalah:
console.log(0 == false);  // true ❌ membingungkan
console.log(0 === false); // false ✅ aman
