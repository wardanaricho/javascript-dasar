// ==============================
// ARRAY DI JAVASCRIPT
// ==============================

// Array adalah tipe data yang digunakan untuk menyimpan banyak nilai
// dalam satu variabel


// Membuat array kosong
let array = [];


// Membuat array dengan isi angka
let arrayAngka = [1, 2, 3, 4, 5];


// Membuat array kosong untuk nama
let arrayNama = [];


// Menampilkan array dalam bentuk tabel
console.table(arrayNama);
// Output: array kosong


// ==============================
// MENAMBAHKAN DATA KE ARRAY
// ==============================

// push() digunakan untuk menambah data ke akhir array

arrayNama.push("Wardana");
arrayNama.push("Richo");

console.table(arrayNama);

// Output:
// index | value
// 0     | Wardana
// 1     | Richo


// ==============================
// MENDAPATKAN PANJANG ARRAY
// ==============================

// length digunakan untuk mengetahui jumlah data dalam array

let panjangArray = arrayNama.length;

console.log(panjangArray);
// Output: 2


// ==============================
// MENGAKSES DATA ARRAY
// ==============================

// Index array dimulai dari 0

let dataArray = arrayNama[1];

console.log(dataArray);
// Output: Richo
// karena index 1 adalah "Richo"


// ==============================
// MENGUBAH DATA ARRAY
// ==============================

// Kita bisa mengubah data dengan menggunakan index

let dataBerubah = arrayNama[1] = "Wanjay";

console.log(dataBerubah);
// Output: Wanjay
// karena nilai baru yang dimasukkan adalah "Wanjay"


// ==============================
// MELIHAT HASIL AKHIR ARRAY
// ==============================

console.table(arrayNama);

// Output:
// index | value
// 0     | Wardana
// 1     | Wanjay


// ==============================
// KESIMPULAN
// ==============================

// array.push(data) → menambah data
// array.length     → jumlah data
// array[index]     → akses data
// array[index] =   → ubah data

// index selalu dimulai dari 0
