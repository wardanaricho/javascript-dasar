// ==============================
// NULL DI JAVASCRIPT
// ==============================

// null adalah nilai yang berarti "tidak ada nilai"
// tetapi sengaja dikosongkan oleh programmer


// Variabel firstName diisi dengan null

let firstName = null;


// ==============================
// PENGECEKAN NILAI
// ==============================

if (firstName === undefined) {

    // undefined berarti variabel belum pernah diberi nilai

    console.log("Hello undefined");

} else if (firstName === null) {

    // null berarti variabel sengaja dikosongkan

    console.log("Hello null");

} else {

    // jika memiliki nilai

    console.log("Hello isi " + firstName);

}


// Output:
// Hello null


// ==============================
// PERBEDAAN undefined vs null
// ==============================

// undefined:
// - variabel dibuat tapi belum diberi nilai
let contohUndefined;
console.log(contohUndefined); // undefined


// null:
// - variabel sengaja dikosongkan
let contohNull = null;
console.log(contohNull); // null


// ==============================
// PERBANDINGAN TIPE DATA
// ==============================

console.log(typeof undefined); // undefined
console.log(typeof null);      // object (ini bug lama di JavaScript)


// ==============================
// CONTOH PENGGUNAAN NULL
// ==============================

// contoh user belum login

let user = null;

if (user === null) {
    console.log("User belum login");
}


// ==============================
// KESIMPULAN
// ==============================

// undefined → belum diberi nilai
// null      → sengaja dikosongkan
