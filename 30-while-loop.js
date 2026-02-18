// ==============================
// WHILE LOOP DI JAVASCRIPT
// ==============================

// while loop digunakan untuk mengulang kode
// selama kondisi bernilai true


// ==============================
// STRUKTUR WHILE LOOP
// ==============================

// while (condition) {
//     kode yang diulang
// }


// ==============================
// CONTOH WHILE LOOP
// ==============================

let counter = 1;

// selama counter <= 10, loop akan terus berjalan

while (counter <= 10) {

    console.log(counter);
    // menampilkan nilai counter

    counter++;
    // menambah counter sebesar 1

}


// ==============================
// CARA KERJA STEP BY STEP
// ==============================

// counter = 1
// cek 1 <= 10 → true → tampilkan 1 → counter jadi 2

// counter = 2
// cek 2 <= 10 → true → tampilkan 2 → counter jadi 3

// ...

// counter = 10
// cek 10 <= 10 → true → tampilkan 10 → counter jadi 11

// counter = 11
// cek 11 <= 10 → false → loop berhenti


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
// PERBEDAAN WHILE vs FOR
// ==============================

// while
// digunakan ketika jumlah perulangan belum pasti

// for
// digunakan ketika jumlah perulangan sudah pasti


// ==============================
// CONTOH INFINITE WHILE (HATI-HATI)
// ==============================

// while(true){
//     console.log("Loop tanpa akhir");
// }


// ==============================
// KESIMPULAN
// ==============================

// while akan berjalan selama kondisi true
