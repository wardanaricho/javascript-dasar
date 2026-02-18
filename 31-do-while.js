// ==============================
// DO WHILE LOOP DI JAVASCRIPT
// ==============================

// do while loop adalah perulangan yang akan dijalankan
// minimal satu kali, walaupun kondisi false


// ==============================
// STRUKTUR DO WHILE
// ==============================

// do {
//     kode yang dijalankan
// } while (condition);


// Perbedaan utama dengan while:
// while → cek kondisi dulu
// do while → jalankan dulu, baru cek kondisi


// ==============================
// CONTOH DO WHILE
// ==============================

let counter = 1;

do {

    console.log(counter);
    // tampilkan nilai counter

    counter++;
    // tambah counter

} while (counter <= 10);


// ==============================
// CARA KERJA STEP BY STEP
// ==============================

// counter = 1
// jalankan → tampilkan 1
// counter = 2 → cek kondisi → true

// counter = 2
// jalankan → tampilkan 2
// counter = 3 → cek kondisi → true

// ...

// counter = 10
// jalankan → tampilkan 10
// counter = 11 → cek kondisi → false → berhenti


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
// PERBEDAAN while vs do while
// ==============================

// while
let a = 11;

while (a <= 10) {
    console.log("while tidak jalan");
}
// tidak ada output


// do while
let b = 11;

do {
    console.log("do while tetap jalan sekali");
} while (b <= 10);

// Output:
// do while tetap jalan sekali


// ==============================
// KESIMPULAN
// ==============================

// while → bisa 0 kali jalan
// do while → minimal 1 kali jalan
