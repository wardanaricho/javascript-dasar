// ==============================
// FOR OF LOOP DI JAVASCRIPT
// ==============================

// for...of digunakan untuk iterasi value langsung
// bukan index atau key

// Bisa digunakan pada:
// - Array
// - String
// - Map
// - Set
// - dan iterable lainnya


// ==============================
// FOR OF PADA ARRAY
// ==============================

// const games = ['Valorant', 'Divinity', 'The Witcher'];

// for(const game of games){

//     // game langsung berisi value

//     console.log(game);

// }


// Output:
// Valorant
// Divinity
// The Witcher


// ==============================
// FOR OF PADA STRING
// ==============================

const nama = "Richo Wardana";

// String adalah iterable, jadi bisa di-loop

for (const char of nama) {

    console.log(char);

}


// ==============================
// OUTPUT
// ==============================

// R
// i
// c
// h
// o
// (spasi)
// W
// a
// r
// d
// a
// n
// a


// ==============================
// PERBEDAAN FOR IN vs FOR OF
// ==============================

// for...in → mengambil index
// for...of → mengambil value


// contoh perbandingan:

const warna = ["red", "green", "blue"];

// for...in
for (const index in warna) {
    console.log(index);
}
// Output:
// 0
// 1
// 2


// for...of
for (const value of warna) {
    console.log(value);
}
// Output:
// red
// green
// blue


// ==============================
// KESIMPULAN
// ==============================

// gunakan for...of untuk array dan string
// gunakan for...in untuk object
