// ==============================
// OPTIONAL CHAINING (?.) DI JAVASCRIPT
// ==============================

// Optional chaining digunakan untuk mengakses property object
// tanpa menyebabkan error jika property tersebut tidak ada


// ==============================
// CONTOH TANPA OPTIONAL CHAINING
// ==============================

let person = {};

// ini akan ERROR:
// karena person.address = undefined
// dan undefined.street tidak bisa diakses

// let address = person.address.street; // ❌ ERROR


// ==============================
// CONTOH DENGAN OPTIONAL CHAINING
// ==============================

// ?. akan menghentikan akses jika nilainya undefined atau null
// dan mengembalikan undefined, bukan error

let address = person?.address?.street;

console.log(address);
// Output: undefined
// Tidak error


// ==============================
// CARA KERJA OPTIONAL CHAINING
// ==============================

// person?.address?.street

// langkah:
// 1. cek person → ada
// 2. cek person.address → undefined
// 3. berhenti dan return undefined
// 4. tidak lanjut ke .street


// ==============================
// CONTOH OBJECT LENGKAP
// ==============================

let user = {
    address: {
        street: "Jl. Merdeka"
    }
};

let streetName = user?.address?.street;

console.log(streetName);
// Output: Jl. Merdeka


// ==============================
// OPTIONAL CHAINING DENGAN ARRAY
// ==============================

let data = null;

console.log(data?.[0]);
// Output: undefined
// tidak error


// ==============================
// OPTIONAL CHAINING DENGAN FUNCTION
// ==============================

let obj = {};

obj.sayHello?.();
// tidak error walaupun function tidak ada


// ==============================
// TANPA OPTIONAL CHAINING (CARA LAMA)
// ==============================

// harus cek manual

let alamat;

if (person.address !== undefined) {
    alamat = person.address.street;
}


// ==============================
// KESIMPULAN
// ==============================

// ?. mencegah error jika property tidak ada
// sangat berguna untuk object bertingkat
