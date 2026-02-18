// ==============================
// BREAK DAN CONTINUE DI JAVASCRIPT
// ==============================

// break → menghentikan seluruh perulangan
// continue → melewati satu perulangan dan lanjut ke berikutnya


// ==============================
// CONTOH BREAK
// ==============================

let counter = 1;

while (true) {

    console.log(`Perulangan ke ${counter}`);
    // tampilkan nomor perulangan

    counter++;
    // tambah counter

    if (counter >= 5) {
        break;
        // menghentikan loop saat counter >= 5
    }

}


// ==============================
// OUTPUT
// ==============================

// Perulangan ke 1
// Perulangan ke 2
// Perulangan ke 3
// Perulangan ke 4


// Loop berhenti saat counter = 5


console.log("=================================");


// ==============================
// CONTOH CONTINUE
// ==============================

// Menampilkan hanya angka ganjil

for (let counter = 1; counter <= 100; counter++) {

    if (counter % 2 == 0) {
        continue;
        // jika angka genap, lewati
    }

    console.log(counter);
    // hanya angka ganjil yang ditampilkan

}


// ==============================
// PENJELASAN counter % 2
// ==============================

// % adalah modulus (sisa bagi)

// angka genap → habis dibagi 2 → sisa 0
// angka ganjil → sisa 1


// ==============================
// OUTPUT
// ==============================

// 1
// 3
// 5
// 7
// ...
// 99


// ==============================
// PERBEDAAN BREAK vs CONTINUE
// ==============================

// break
// → menghentikan loop sepenuhnya

// continue
// → melewati satu iterasi saja


// ==============================
// CONTOH PERBEDAAN
// ==============================

// break example
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log("break:", i);
}

// Output:
// break: 1
// break: 2


// continue example
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log("continue:", i);
}

// Output:
// continue: 1
// continue: 2
// continue: 4
// continue: 5
