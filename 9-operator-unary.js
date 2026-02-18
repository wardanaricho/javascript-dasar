// ==============================
// UNARY OPERATOR DI JAVASCRIPT
// ==============================

// Unary operator adalah operator yang hanya bekerja pada satu nilai (satu operand)


// Unary plus (+)
// Digunakan untuk memastikan nilai adalah number (tidak mengubah nilainya jika sudah number)

let result = +1;

console.log(result); // 1
// +1 tetap 1
// Unary plus biasanya digunakan untuk konversi string ke number
// contoh: +"123" → 123


// ==============================
// INCREMENT OPERATOR (++)
// ==============================

// ++ digunakan untuk menambah nilai sebesar 1

result++;

console.log(result); // 2
// Sama dengan:
// result = result + 1


// ==============================
// DECREMENT OPERATOR (--)
// ==============================

// -- digunakan untuk mengurangi nilai sebesar 1

result--;

console.log(result); // 1
// Sama dengan:
// result = result - 1


// ==============================
// UNARY NEGATIVE (-)
// ==============================

// Unary minus digunakan untuk membuat nilai menjadi negatif

let resultMin = -1;

console.log(resultMin); // -1


// Increment dari -1 menjadi 0

resultMin++;

console.log(resultMin); // 0
// -1 + 1 = 0


// Decrement dari 0 menjadi -1

resultMin--;

console.log(resultMin); // -1
// 0 - 1 = -1


// ==============================
// RINGKASAN UNARY OPERATOR
// ==============================

// +  → unary plus (menjadikan number)
// -  → unary minus (menjadikan negatif)
// ++ → increment (tambah 1)
// -- → decrement (kurang 1)


// ==============================
// CONTOH KONVERSI MENGGUNAKAN +
// ==============================

let angkaString = "10";

let angkaNumber = +angkaString;

console.log(angkaNumber); // 10
console.log(typeof angkaNumber); // number


// ==============================
// KESIMPULAN
// ==============================

// ++ menambah 1
// -- mengurangi 1
// + mengkonversi ke number
// - menjadikan nilai negatif
