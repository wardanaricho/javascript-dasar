// ==============================
// CONSOLE OBJECT DI JAVASCRIPT
// ==============================

// console adalah object bawaan JavaScript
// Digunakan untuk debugging dan menampilkan informasi ke console


// ==============================
// console.log()
// ==============================

// Menampilkan pesan biasa ke console

console.log("Ini adalah console log");
// Output: Ini adalah console log


// ==============================
// console.error()
// ==============================

// Menampilkan pesan error
// Biasanya berwarna merah di console

console.error("Ini adalah console error");
// Output: Ini adalah console error


// ==============================
// console.warn()
// ==============================

// Menampilkan pesan peringatan
// Biasanya berwarna kuning

console.warn("Ini adalah console warning");
// Output: Ini adalah console warning


// ==============================
// console.info()
// ==============================

// Menampilkan informasi
// Mirip dengan console.log()

console.info("Ini adalah console info");
// Output: Ini adalah console info


// ==============================
// console.debug()
// ==============================

// Digunakan untuk debugging
// Kadang hanya muncul jika mode debug aktif

console.debug("Ini adalah console debug");
// Output: Ini adalah console debug


// ==============================
// console.table()
// ==============================

// Menampilkan data dalam bentuk tabel
// Biasanya digunakan untuk array atau object

console.table(["Richo", "Wardana", "Ocir"]);

// Output:
// index | value
// 0     | Richo
// 1     | Wardana
// 2     | Ocir


// ==============================
// console.time() dan console.timeEnd()
// ==============================

// Digunakan untuk mengukur waktu eksekusi kode

console.time("Timer");

// kode yang ingin diukur
for (let i = 0; i < 1000000; i++) { }

console.timeEnd("Timer");

// Output contoh:
// Timer: 5ms


// ==============================
// console.assert()
// ==============================

// Menampilkan error jika kondisi false

console.assert(true, "Tidak akan muncul");
// tidak muncul karena true

console.assert(false, "Ini adalah console assert");
// Output: Assertion failed: Ini adalah console assert


// ==============================
// console.count()
// ==============================

// Menghitung berapa kali dipanggil

console.count("Counter");
console.count("Counter");
console.count("Counter");

// Output:
// Counter: 1
// Counter: 2
// Counter: 3


// ==============================
// console.clear()
// ==============================

// Membersihkan console

console.clear();
// Console akan kosong


// ==============================
// KESIMPULAN
// ==============================

// console.log()    → output biasa
// console.error()  → error
// console.warn()   → warning
// console.info()   → info
// console.debug()  → debug
// console.table()  → tabel
// console.time()   → mulai timer
// console.timeEnd()→ akhir timer
// console.assert() → cek kondisi
// console.count()  → hitung jumlah
// console.clear()  → bersihkan console
