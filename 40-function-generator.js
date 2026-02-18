// ==============================
// GENERATOR FUNCTION
// ==============================

// Generator function adalah function khusus
// yang bisa "pause" dan "resume"

// ditandai dengan tanda *
// function*

function* createNames() {

    yield 'wardana';
    yield 'richo';

}


// Memanggil generator TIDAK langsung menjalankan function
// tetapi mengembalikan Generator Object

const names = createNames();


// Generator bisa di-loop menggunakan for...of

for (const name of names) {
    console.log(name);
}


// Output:
// wardana
// richo



// ==============================
// PENJELASAN YIELD
// ==============================

// yield digunakan untuk:
// - mengembalikan nilai
// - menghentikan sementara function

// generator akan lanjut saat dipanggil lagi



// ==============================
// CONTOH GENERATOR GANJIL
// ==============================

function* buatGanjil(value) {

    for (let i = 1; i <= value; i++) {

        if (i % 2 === 1) {

            yield i;
            // pause di sini dan kirim nilai i

        }

    }

}

const angkaGanjil = buatGanjil(100);


// ==============================
// MENGAMBIL DATA DENGAN next()
// ==============================

// next() mengembalikan object:
// {
//   value: nilai,
//   done: true/false
// }

console.log(angkaGanjil.next().value);
// Output: 1

console.log(angkaGanjil.next().value);
// Output: 3

console.log(angkaGanjil.next().value);
// Output: 5



// ==============================
// BENTUK OBJECT next()
// ==============================

const test = buatGanjil(5);

console.log(test.next());
// Output:
// { value: 1, done: false }

console.log(test.next());
// Output:
// { value: 3, done: false }

console.log(test.next());
// Output:
// { value: 5, done: false }

console.log(test.next());
// Output:
// { value: undefined, done: true }



// ==============================
// KEUNTUNGAN GENERATOR
// ==============================

// 1. Hemat memory
// tidak membuat semua data sekaligus

// 2. Lazy execution
// data dibuat saat dibutuhkan

// 3. Cocok untuk data besar



// ==============================
// CONTOH TANPA GENERATOR
// ==============================

// ini boros memory

function buatGanjilArray(value) {

    const result = [];

    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            result.push(i);
        }
    }

    return result;
}



// ==============================
// CONTOH DENGAN GENERATOR
// ==============================

// lebih hemat memory

function* buatGanjilGenerator(value) {

    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }

}



// ==============================
// CONTOH PAGINATION (REAL USE CASE)
// ==============================

function* pagination() {

    yield "Page 1 data";
    yield "Page 2 data";
    yield "Page 3 data";

}

const pages = pagination();

console.log(pages.next().value);
console.log(pages.next().value);
console.log(pages.next().value);



// ==============================
// KESIMPULAN
// ==============================

// function* → generator function
// yield → mengembalikan nilai sementara
// next() → mengambil nilai berikutnya

// generator cocok untuk:
// - pagination
// - data besar
// - infinite data
// - lazy loading
