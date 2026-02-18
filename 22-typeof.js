// ==============================
// TYPEOF OPERATOR DI JAVASCRIPT
// ==============================

// typeof digunakan untuk mengetahui tipe data suatu nilai


let tipe;

// tipe = 123;              // number
// tipe = "Halo dunia";    // string
// tipe = true;            // boolean
tipe = { nama: "Richo" };   // object
// tipe = [1,2,3];         // object (array adalah object)
// tipe = function(){};    // function
// tipe = undefined;       // undefined
// tipe = Symbol("id");    // symbol
// tipe = 123n;            // bigint
// tipe = null;            // object (ini bug lama JS)


// ==============================
// PENGECEKAN TIPE DATA
// ==============================

if (typeof tipe === "number") {

    console.log(`${tipe} = Tipe data number`);

} else if (typeof tipe === "string") {

    console.log(`${tipe} = Tipe data string`);

} else if (typeof tipe === "boolean") {

    console.log(`${tipe} = Tipe data boolean`);

} else if (typeof tipe === "object") {

    // object termasuk:
    // object biasa
    // array
    // null (ini bug lama JavaScript)

    console.log(`${tipe} = Tipe data object (ini perilaku khusus JS)`);

} else if (typeof tipe === "function") {

    console.log(`${tipe} = Tipe data function`);

} else if (typeof tipe === "undefined") {

    console.log(`${tipe} = Tipe data undefined`);

} else if (typeof tipe === "symbol") {

    console.log(`${tipe} = Tipe data symbol`);

} else if (typeof tipe === "bigint") {

    console.log(`${tipe} = Tipe data bigint`);

} else {

    console.log(`${tipe} = Tidak dikenali`);

}


// ==============================
// HASIL UNTUK OBJECT
// ==============================

// tipe = {nama: "Richo"}

// typeof tipe → "object"

// Output:
// [object Object] = Tipe data object (ini perilaku khusus JS)


// ==============================
// DAFTAR HASIL TYPEOF
// ==============================

// typeof 123           → "number"
// typeof "Hello"       → "string"
// typeof true          → "boolean"
// typeof {}            → "object"
// typeof []            → "object"
// typeof function(){}  → "function"
// typeof undefined     → "undefined"
// typeof Symbol()      → "symbol"
// typeof 123n          → "bigint"
// typeof null          → "object" (bug lama)


// ==============================
// CATATAN PENTING: null
// ==============================

// ini bug lama JavaScript

console.log(typeof null); // "object"


// cara cek null yang benar:

let data = null;

if (data === null) {
    console.log("Ini null");
}


// ==============================
// KESIMPULAN
// ==============================

// typeof digunakan untuk cek tipe data
// tetapi null harus dicek dengan === null
