// ==============================
// LABELED LOOP DI JAVASCRIPT
// ==============================

// Label digunakan untuk memberi nama pada loop
// sehingga break atau continue bisa mengontrol loop tertentu

// format:
// labelName:
// for (...) {
// }


// ==============================
// CONTOH DASAR LABELED LOOP
// ==============================

// loopi:
// for(let i = 0; i < 100; i++){
//     loopj:
//     for(let j = 0; j < 10; j++){
//         console.log(`${i} - ${j}`);
//     }
// }


// ==============================
// CONTOH DENGAN LABEL DAN CONTINUE
// ==============================

loopi:
for (let i = 0; i < 100; i++) {

    loopj:
    for (let j = 0; j < 10; j++) {

        if (j > 10) {
            continue loopi;
            // lompat ke iterasi berikutnya dari loopi
        }

        console.log(`${i} - ${j}`);

    }

}


// ==============================
// PENJELASAN PENTING
// ==============================

// Kondisi:
// if(j > 10)

// ini TIDAK PERNAH TRUE
// karena j hanya dari 0 sampai 9

// sehingga continue loopi; tidak pernah dijalankan


// ==============================
// OUTPUT
// ==============================

// 0 - 0
// 0 - 1
// ...
// 0 - 9

// 1 - 0
// ...
// 99 - 9


// ==============================
// CONTOH LABELED LOOP YANG BENAR
// ==============================

// contoh jika ingin skip ke loop luar saat j == 5

loopi:
for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 10; j++) {

        if (j === 5) {
            continue loopi;
            // lompat ke i berikutnya
        }

        console.log(`${i} - ${j}`);
    }
}


// Output:
// 0 - 0
// 0 - 1
// 0 - 2
// 0 - 3
// 0 - 4
// (lompat ke i berikutnya)


// ==============================
// LABELED BREAK
// ==============================

loopi:
for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 10; j++) {

        if (j === 5) {
            break loopi;
            // keluar dari semua loop
        }

        console.log(`${i} - ${j}`);
    }
}


// ==============================
// KESIMPULAN
// ==============================

// label digunakan untuk mengontrol nested loop
// continue label → lanjut loop tertentu
// break label → keluar dari loop tertentu
