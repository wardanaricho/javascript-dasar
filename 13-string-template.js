// ==============================
// TEMPLATE STRING DI JAVASCRIPT
// ==============================

// Template string adalah cara modern untuk membuat string
// menggunakan backtick (`) bukan tanda kutip (" atau ')

// Keuntungan:
// - bisa memasukkan variabel
// - bisa memasukkan ekspresi
// - bisa membuat multiline string


// ==============================
// CONTOH DASAR TEMPLATE STRING
// ==============================

let nama = "Richo";

console.log(nama);
// Output: Richo


let umur = 25;

// ${} digunakan untuk memasukkan variabel ke dalam string
let message = `Halo, nama saya ${nama} dan umur saya ${umur} tahun.`;

console.log(message);
// Output:
// Halo, nama saya Richo dan umur saya 25 tahun.


// ==============================
// TEMPLATE STRING DENGAN EKSPRESI
// ==============================

// Kita bisa memasukkan operasi atau perbandingan

let score = 85;
let fullName = "Richo";

const template = `Nama : ${fullName}, Pass ${score > 75}`;

console.log(template);
// score > 75 → true
// Output:
// Nama : Richo, Pass true


// ==============================
// TEMPLATE STRING MULTILINE
// ==============================

// Template string bisa membuat string multi baris tanpa \n

let multiLineString = `
Richo Wardana
adalah seorang 
KAPTEN`;

console.log(multiLineString);

// Output:
// Richo Wardana
// adalah seorang
// KAPTEN


// ==============================
// PERBANDINGAN CARA LAMA vs BARU
// ==============================

// Cara lama (concatenation)
let oldMessage = "Halo, nama saya " + nama + " dan umur saya " + umur;

// Cara modern (template string)
let newMessage = `Halo, nama saya ${nama} dan umur saya ${umur}`;

console.log(oldMessage);
console.log(newMessage);


// ==============================
// KELEBIHAN TEMPLATE STRING
// ==============================

// ✅ lebih mudah dibaca
// ✅ bisa memasukkan variabel
// ✅ bisa memasukkan ekspresi
// ✅ bisa multiline
// ✅ lebih modern (ES6)


// ==============================
// KESIMPULAN
// ==============================

// Gunakan backtick (`)
// Gunakan ${} untuk memasukkan variabel atau ekspresi
