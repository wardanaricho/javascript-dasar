// ==============================
// ARROW FUNCTION DI JAVASCRIPT
// ==============================

// Arrow function adalah cara singkat menulis function
// diperkenalkan di ES6 (2015)

// format dasar:
// const namaFunction = (parameter) => {
//     kode
// }


// ==============================
// CONTOH ARROW FUNCTION DASAR
// ==============================

const sayHello = (name) => {

    console.log("Hello", name);

}

sayHello("Wardana");

// Output:
// Hello Wardana



// ==============================
// VERSI SINGKAT (ONE LINE)
// ==============================

// jika hanya 1 baris, tidak perlu {}

const sayHi = (nama) => console.log(`Hello ${nama}`);

sayHi("Richo");

// Output:
// Hello Richo



// ==============================
// ARROW FUNCTION SEBAGAI CALLBACK
// ==============================

// callback adalah function yang dikirim sebagai parameter

function giveMeAName(callback) {

    callback("Richo");

}


// menggunakan arrow function sebagai callback

giveMeAName((nama) => console.log(`Hello ${nama}`));

// Output:
// Hello Richo



// ==============================
// PERBANDINGAN FUNCTION BIASA vs ARROW
// ==============================

// function biasa
const hello1 = function (name) {

    console.log("Hello " + name);

};


// arrow function
const hello2 = (name) => {

    console.log("Hello " + name);

};



// ==============================
// ARROW FUNCTION TANPA PARAMETER
// ==============================

const test = () => {

    console.log("Hello World");

};

test();



// ==============================
// ARROW FUNCTION SATU PARAMETER
// ==============================

// boleh tanpa ()

const test2 = name => {

    console.log("Hello " + name);

};

test2("Richo");



// ==============================
// ARROW FUNCTION DENGAN RETURN
// ==============================

// versi panjang
const sum = (a, b) => {

    return a + b;

};

// versi singkat (implicit return)
const sumShort = (a, b) => a + b;

console.log(sumShort(5, 3));
// Output: 8



// ==============================
// KELEBIHAN ARROW FUNCTION
// ==============================

// ✅ lebih singkat
// ✅ cocok untuk callback
// ✅ lebih modern



// ==============================
// KEKURANGAN ARROW FUNCTION
// ==============================

// ❌ tidak memiliki this sendiri
// ❌ tidak bisa digunakan sebagai constructor



// ==============================
// KESIMPULAN
// ==============================

// function biasa:
// function sayHello(){}

// arrow function:
// const sayHello = () => {}
