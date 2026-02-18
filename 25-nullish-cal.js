// ==============================
// NULLISH COALESCING OPERATOR (??)
// ==============================

// Operator ?? digunakan untuk memberikan nilai default
// jika nilai adalah null atau undefined


// ==============================
// CONTOH TANPA NULLISH OPERATOR
// ==============================

let parameter;

let data = parameter;

// cek manual
if (data === undefined) {
    data = "Default";
}

console.log(data);
// Output: Default
// karena parameter bernilai undefined


// ==============================
// CONTOH DENGAN NULLISH OPERATOR
// ==============================

let param;

// jika param null atau undefined → gunakan "Default"
// jika tidak → gunakan param

let dataParam = param ?? "Default";

console.log(dataParam);
// Output: Default


// ==============================
// CARA KERJA ??
// ==============================

// kiri ?? kanan

// jika kiri null atau undefined → pakai kanan
// jika kiri ada nilai → pakai kiri


// ==============================
// CONTOH LAIN
// ==============================

let nama = null;

let hasil = nama ?? "Anonymous";

console.log(hasil);
// Output: Anonymous


let username = "Richo";

let hasil2 = username ?? "Anonymous";

console.log(hasil2);
// Output: Richo


// ==============================
// PERBEDAAN ?? vs ||
// ==============================

// || menganggap falsy sebagai kosong
// ?? hanya null dan undefined

console.log("" || "Default");  // Output: Default
console.log("" ?? "Default");  // Output: ""


// contoh lain
console.log(0 || 100);  // Output: 100
console.log(0 ?? 100);  // Output: 0


// ==============================
// NILAI YANG DIANGGAP NULLISH
// ==============================

// null
// undefined


// ==============================
// KESIMPULAN
// ==============================

// ?? lebih aman daripada ||
// karena hanya cek null dan undefined
