// ==============================
// UNDEFINED DI JAVASCRIPT
// ==============================

// undefined adalah nilai default ketika variabel belum diberi nilai


// ==============================
// CONTOH VARIABEL UNDEFINED
// ==============================

let nama;

// Variabel dideklarasikan tetapi belum diberi nilai
// Maka nilainya adalah undefined

console.log(typeof (nama));
// Output: undefined


// Setelah diberi nilai

nama = "Richo";

if (nama === undefined) {
    console.log("Nama belum diisi");
} else {
    console.log("Nama sudah diisi");
}

// Output:
// Nama sudah diisi


// ==============================
// UNDEFINED PADA ARRAY
// ==============================

const names = ["Richo", "Wardana"];

// names[0] → Richo
// names[1] → Wardana
// names[2] → undefined (karena belum ada)

console.log(typeof (names[2]));
// Output: undefined


if (names[2] === undefined) {
    console.log("Nama belum diisi");
} else {
    console.log("Nama sudah diisi " + names[2]);
}

// Output:
// Nama belum diisi


// Jika ditambahkan data:
// names.push("Wanjay");

// Maka:
// names[2] → "Wanjay"


// ==============================
// UNDEFINED PADA OBJECT
// ==============================

const person = {};

// person.name belum ada

if (person.name === undefined) {
    console.log("Nama belum diisi");
} else {
    console.log("Nama sudah diisi " + person.name);
}

// Output:
// Nama belum diisi


// Jika ditambahkan:
// person.name = "Richo";


// ==============================
// KAPAN UNDEFINED TERJADI
// ==============================

// 1. Variabel belum diberi nilai
let contoh;
console.log(contoh); // undefined


// 2. Akses index array yang tidak ada
let arr = [1, 2];
console.log(arr[5]); // undefined


// 3. Akses properti object yang tidak ada
let obj = {};
console.log(obj.nama); // undefined


// 4. Function tanpa return
function test() { }
console.log(test()); // undefined


// ==============================
// PERBEDAAN undefined vs null
// ==============================

// undefined → belum diberi nilai
// null      → sengaja dikosongkan


// ==============================
// KESIMPULAN
// ==============================

// undefined artinya nilai belum ada atau belum diisi
