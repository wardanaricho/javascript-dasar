// ==============================
// OBJECT DI JAVASCRIPT
// ==============================

// Object adalah tipe data yang digunakan untuk menyimpan data
// dalam bentuk pasangan key dan value

// format:
// key: value


// ==============================
// MEMBUAT OBJECT KOSONG
// ==============================

const person = {};


// Menambahkan properti ke object

person.firstName = "Wardana";
// key: firstName
// value: "Wardana"

person.lastName = "Richo";
// key: lastName
// value: "Richo"

person.age = 22;
// key: age
// value: 22

person.isHandsome = true;
// key: isHandsome
// value: true


// Menampilkan seluruh object dalam bentuk tabel

console.table(person);
// Output:
// firstName  | Wardana
// lastName   | Richo
// age        | 22
// isHandsome | true


// ==============================
// MENGAKSES DATA OBJECT
// ==============================

// Mengakses menggunakan dot notation

console.log(person.firstName);
// Output: Wardana

console.log(person.lastName);
// Output: Richo

console.log(person.age);
// Output: 22

console.log(person.isHandsome);
// Output: true


// ==============================
// MENGHAPUS PROPERTI OBJECT
// ==============================

// delete digunakan untuk menghapus properti

delete person.isHandsome;

console.table(person);

// Output sekarang:
// firstName | Wardana
// lastName  | Richo
// age       | 22


console.log("____________________________________");


// ==============================
// MEMBUAT OBJECT LANGSUNG DENGAN ISI
// ==============================

// Cara lebih singkat membuat object

const orang = {
    firstName: "Wardana",
    lastName: "Richo",
    age: 22,
    isHandsome: true
};


// Menampilkan object

console.table(orang);


// Mengakses dan menggabungkan properti

console.info(orang.firstName + " " + orang.lastName);
// Output: Wardana Richo


// ==============================
// KEUNTUNGAN OBJECT
// ==============================

// - menyimpan banyak data dalam satu variabel
// - data memiliki nama (key)
// - mudah diakses


// ==============================
// PERBEDAAN ARRAY vs OBJECT
// ==============================

// Array:
// index berupa angka
// contoh: array[0]

// Object:
// menggunakan key
// contoh: person.firstName


// ==============================
// KESIMPULAN
// ==============================

// object.key → akses data
// object.key = value → tambah / ubah data
// delete object.key → hapus data
