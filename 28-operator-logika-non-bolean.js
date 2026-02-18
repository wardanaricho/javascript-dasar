// ==============================
// OPERATOR LOGIKA OR (||) NON-BOOLEAN
// ==============================

// Operator || tidak selalu mengembalikan boolean
// tetapi mengembalikan NILAI pertama yang truthy

// Format:
nilai1 || nilai2

// Cara kerja:
// - jika nilai1 truthy → return nilai1
// - jika nilai1 falsy  → return nilai2


// ==============================
// CONTOH TRUTHY → RETURN KIRI
// ==============================

console.log("Hello" || "Anjay"); // Hello
// "Hello" truthy → return "Hello"

console.log(true || "Anjay"); // true

console.log(1 || "Anjay"); // 1

console.log({} || "Anjay"); // {}

console.log([] || "Anjay"); // []

console.log("hello" || "Anjay"); // hello


// ==============================
// CONTOH FALSY → RETURN KANAN
// ==============================

console.log("" || "Anjay"); // Anjay
// "" falsy → return "Anjay"

console.log(0 || "Anjay"); // Anjay

console.log(null || "Anjay"); // Anjay

console.log(undefined || "Anjay"); // Anjay

console.log(NaN || "Anjay"); // Anjay

console.log(false || "Anjay"); // Anjay


// ==============================
// CONTOH TRUTHY STRING
// ==============================

console.log(" " || "Anjay"); // " "
console.log("0" || "Anjay"); // "0"
console.log("false" || "Anjay"); // "false"
console.log("null" || "Anjay"); // "null"
console.log("undefined" || "Anjay"); // "undefined"


// ==============================
// CONTOH TRUTHY NUMBER
// ==============================

console.log(-1 || "Anjay"); // -1
console.log(0.1 || "Anjay"); // 0.1
console.log(-0.1 || "Anjay"); // -0.1
console.log(Infinity || "Anjay"); // Infinity


// ==============================
// OBJECT, ARRAY, FUNCTION SEMUA TRUTHY
// ==============================

console.log({} || "Anjay"); // {}
console.log({ a: 1 } || "Anjay"); // {a:1}

console.log([] || "Anjay"); // []
console.log([1, 2, 3] || "Anjay"); // [1,2,3]

console.log(function () { } || "Anjay"); // function(){}

console.log(new Date() || "Anjay"); // Date object


// ==============================
// BIGINT, SYMBOL, REGEXP TRUTHY
// ==============================

console.log(1n || "Anjay"); // 1n
console.log(Symbol() || "Anjay"); // Symbol()
console.log(/regex/ || "Anjay"); // /regex/


// ==============================
// KONSEP PENTING
// ==============================

// || tidak mengembalikan true / false
// tetapi mengembalikan NILAI


// contoh:

let result = "" || "Default";

console.log(result); // Default


// sama dengan:

let result2;

if ("") {
    result2 = "";
} else {
    result2 = "Default";
}


// ==============================
// PENGGUNAAN NYATA (DEFAULT VALUE)
// ==============================

let username = "";

let finalUsername = username || "Anonymous";

console.log(finalUsername); // Anonymous


// ==============================
// PERBEDAAN || vs ??
// ==============================

// || → cek falsy
// ?? → cek null dan undefined saja

console.log("" || "Default"); // Default
console.log("" ?? "Default"); // ""


// ==============================
// KESIMPULAN INTI
// ==============================

// nilai1 || nilai2

// return:
// nilai1 → jika truthy
// nilai2 → jika nilai1 falsy
