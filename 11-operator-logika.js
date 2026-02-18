// ==============================
// OPERATOR LOGIKA DI JAVASCRIPT
// ==============================

// Operator logika digunakan untuk menggabungkan atau membalik kondisi
// Hasilnya selalu boolean: true atau false

// Operator logika:
// && → DAN (AND)
// || → ATAU (OR)
// !  → TIDAK (NOT)


// ==============================
// OPERATOR AND (&&)
// ==============================

// AND akan menghasilkan true hanya jika SEMUA true

let result = true && true;
console.log(result); // true
// true DAN true → true

result = true && false;
console.log(result); // false
// true DAN false → false

result = false && true;
console.log(result); // false
// false DAN true → false

result = false && false;
console.log(result); // false
// false DAN false → false


// ==============================
// OPERATOR OR (||)
// ==============================

// OR akan menghasilkan true jika SALAH SATU true

result = true || true;
console.log(result); // true

result = true || false;
console.log(result); // true

result = false || true;
console.log(result); // true

result = false || false;
console.log(result); // false
// hanya false jika semua false


// ==============================
// OPERATOR NOT (!)
// ==============================

// NOT digunakan untuk membalik nilai boolean

result = !true;
console.log(result); // false
// true dibalik menjadi false

result = !false;
console.log(result); // true
// false dibalik menjadi true


// ==============================
// CONTOH KASUS NYATA
// ==============================

// Misal nilai minimum lulus adalah 7, maksimum 10

let score = 8;


// Mengecek apakah lulus
// harus >= 7 DAN <= 10

let pass = score >= 7 && score <= 10;

console.log(pass); // true
// karena 8 berada di antara 7 dan 10


// Mengecek apakah gagal
// jika < 7 ATAU > 10

let fail = score < 7 || score > 10;

console.log(fail); // false
// karena 8 tidak kurang dari 7 dan tidak lebih dari 10


// Mengecek tidak lulus menggunakan NOT

let notPass = !(score >= 7 && score <= 10);

console.log(notPass); // false
// karena score sebenarnya lulus, maka NOT membuatnya false


// ==============================
// TABEL KEBENARAN
// ==============================

// AND (&&)
// true  && true  → true
// true  && false → false
// false && true  → false
// false && false → false

// OR (||)
// true  || true  → true
// true  || false → true
// false || true  → true
// false || false → false

// NOT (!)
// !true  → false
// !false → true


// ==============================
// KESIMPULAN
// ==============================

// && → semua harus true
// || → cukup salah satu true
// !  → membalik nilai
