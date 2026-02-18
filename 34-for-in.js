// ==============================
// FOR IN LOOP DI JAVASCRIPT
// ==============================

// for...in digunakan untuk melakukan iterasi pada:
// - property object
// - index array


// ==============================
// FOR IN PADA OBJECT
// ==============================

// contoh object

// const person = {
//     name: 'Richo Wardana',
//     age: 26,
//     city: 'Nganjuk'
// }

// for(const property in person){

//     // property → key object
//     // person[property] → value

//     console.log(`${property} : ${person[property]}`);

// }


// Output:
// name : Richo Wardana
// age : 26
// city : Nganjuk


// ==============================
// FOR IN PADA ARRAY
// ==============================

const colors = ['red', 'green', 'blue'];

// for...in akan mengembalikan index

for (const index in colors) {

    console.log(`${index} : ${colors[index]}`);

}


// Output:
// 0 : red
// 1 : green
// 2 : blue


// ==============================
// PENJELASAN
// ==============================

// index adalah string:
// "0", "1", "2"

// colors[index] adalah value:
// red, green, blue


// ==============================
// PERBEDAAN FOR IN vs FOR OF
// ==============================

// for...in → mengambil index / key
// for...of → mengambil value


// contoh for...of

for (const color of colors) {

    console.log(color);

}

// Output:
// red
// green
// blue


// ==============================
// REKOMENDASI
// ==============================

// gunakan for...in → untuk object
// gunakan for...of → untuk array
