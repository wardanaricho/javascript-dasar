// ==============================
// VAR KEYWORD
// ==============================

// var digunakan untuk mendeklarasikan variabel (cara lama sebelum ES6)

var fullName;
// Variabel fullName dideklarasikan, tetapi belum memiliki nilai
// Nilainya: undefined

fullName = "Richo Wardana";
// Memberikan nilai string ke variabel fullName

console.log(fullName);
// Output: Richo Wardana


// Nilai variabel var bisa diubah (reassign)
fullName = "Ocir26";

console.log(fullName);
// Output: Ocir26


// Bisa langsung deklarasi dan isi nilai
var firstName = "Richo";
var lastName = "Wardana";

console.log(firstName + " " + lastName);
// Menggabungkan dua string
// Output: Richo Wardana


// ==============================
// LET KEYWORD
// ==============================

// let adalah cara modern untuk membuat variabel (ES6)

let nickname = "Ocir the Lone Wolf";

console.log(nickname);
// Output: Ocir the Lone Wolf


// let bisa diubah nilainya (reassign)
nickname = "Ocir the Brave";

console.log(nickname);
// Output: Ocir the Brave


// ==============================
// CONST KEYWORD
// ==============================

// const digunakan untuk membuat constant (nilai tetap)
// Tidak bisa diubah setelah diberi nilai

const PI = 3.14;

console.log("phi = " + PI);
// Output: phi = 3.14


// Jika mencoba mengubah const, akan error
// PI = 3.14159; ❌ ERROR
// TypeError: Assignment to constant variable


// ==============================
// PERBEDAAN VAR, LET, CONST
// ==============================

// var
// - bisa dideklarasi ulang
// - bisa diubah
// - scope function
// - cara lama

// let
// - tidak bisa dideklarasi ulang di scope yang sama
// - bisa diubah
// - scope block
// - direkomendasikan untuk variabel yang berubah

// const
// - tidak bisa dideklarasi ulang
// - tidak bisa diubah
// - scope block
// - direkomendasikan untuk nilai tetap


// ==============================
// REKOMENDASI MODERN JAVASCRIPT
// ==============================

// gunakan const → default
// gunakan let   → jika nilainya akan berubah
// hindari var   → karena bisa menyebabkan bug
