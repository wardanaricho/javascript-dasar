// ==============================
// WITH STATEMENT DI JAVASCRIPT
// ==============================

// with digunakan untuk mengakses property object
// tanpa harus menulis nama object berulang kali


const person = {
    firstName: 'Richo',
    lastName: 'Wardana',
    age: 26
};


// Variabel global dengan nama yang sama
const firstName = 'Anjay';
const lastName = 'Guninjay';


// Tanpa with (cara normal dan direkomendasikan)

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);


// ==============================
// DENGAN WITH
// ==============================

with (person) {

    console.log(firstName);
    console.log(lastName);
    console.log(age);

}


// Output:
// Richo
// Wardana
// 26


// ==============================
// CARA KERJA WITH
// ==============================

// with(person)
// artinya semua property di dalam person
// bisa diakses langsung tanpa person.


// ini sama dengan:

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);


// ==============================
// CONTOH MASALAH WITH
// ==============================

// Perhatikan ada variabel global:

const namaDepan = "Global";

const obj = {
    namaDepan: "Object"
};

with (obj) {
    console.log(namaDepan);
}

// Output:
// Object


// Tapi ini membingungkan karena:
// apakah dari object atau global?


// ==============================
// ALASAN WITH TIDAK DIREKOMENDASIKAN
// ==============================

// ❌ membuat kode ambigu
// ❌ sulit dibaca
// ❌ sulit di-debug
// ❌ memperlambat JavaScript engine
// ❌ deprecated (tidak direkomendasikan lagi)


// ==============================
// CARA YANG DIREKOMENDASIKAN
// ==============================

// gunakan object langsung

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);


// atau destructuring (cara modern)

const { firstName: fn, lastName: ln, age } = person;

console.log(fn);
console.log(ln);
console.log(age);


// ==============================
// KESIMPULAN
// ==============================

// with → jangan digunakan
// gunakan object.property atau destructuring
