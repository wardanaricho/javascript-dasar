// ==============================
// OPERATOR "in" DI JAVASCRIPT
// ==============================

// operator "in" digunakan untuk mengecek apakah sebuah property / key
// ada di dalam object atau index ada di dalam array

// hasilnya boolean: true atau false


// ==============================
// CONTOH PADA OBJECT
// ==============================

const person = {
    firstName: "Richo",
    lastName: "Wardana",
    age: 20
};


// cek apakah property "firstName" ada
// const result = "firstName" in person;


// cek property yang tidak ada
const result = "tidakAda" in person;

console.log(result);
// Output: false
// karena property "tidakAda" tidak ada di object person


// ==============================
// CONTOH PADA ARRAY
// ==============================

const arrayPerson = [null, "lastName", "age"];

// arrayPerson memiliki index:
// 0 → null
// 1 → "lastName"
// 2 → "age"

// cek apakah index 0 ada

const resultArray = 0 in arrayPerson;

console.log(resultArray);
// Output: true
// karena index 0 ada, walaupun nilainya null


// ==============================
// PENTING: "in" CEK PROPERTY, BUKAN NILAI
// ==============================

const personUndefined = {
    firstName: undefined
};

// Walaupun nilainya undefined,
// property "firstName" tetap ADA

const resultUndefined = "firstName" in personUndefined;

console.log(resultUndefined);
// Output: true


// ==============================
// PERBEDAAN "in" vs === undefined
// ==============================

// object dengan undefined
const obj = {
    nama: undefined
};

// cek dengan in
console.log("nama" in obj); // true

// cek dengan undefined
console.log(obj.nama === undefined); // true


// object kosong
const obj2 = {};

console.log("nama" in obj2); // false
console.log(obj2.nama === undefined); // true


// ==============================
// KESIMPULAN PENTING
// ==============================

// "property" in object
// → true jika property ada
// → false jika property tidak ada

// operator "in" TIDAK peduli nilainya:
// undefined → tetap true
// null      → tetap true


// ==============================
// CONTOH SEDERHANA
// ==============================

const user = {
    username: "Richo"
};

console.log("username" in user); // true
console.log("password" in user); // false
