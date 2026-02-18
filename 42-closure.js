// ==============================
// CLOSURE DI JAVASCRIPT
// ==============================

// Closure adalah function yang "mengingat"
// variabel dari scope tempat dia dibuat,
// meskipun function tersebut dipanggil di luar scope itu.


// Function utama (outer function)
function createAdder(value) {

    // Variabel lokal milik createAdder
    const owner = "Richo";

    // Function di dalam function
    function add(param) {

        // owner diakses dari parent scope (closure)
        console.log(owner);

        // value juga diakses dari parent scope (closure)
        return value + param;

    }

    // Mengembalikan function add
    // bukan hasilnya, tapi function-nya
    return add;

}


// createAdder(2) dipanggil
// value = 2
// owner = "Richo"
// function add dibuat, dan "mengingat" value dan owner

const addTwo = createAdder(2);


// Sekarang addTwo adalah function add(param)
// yang sudah menyimpan value = 2 dan owner = "Richo"


// Memanggil addTwo(10)
console.log(addTwo(10));


// ==============================
// OUTPUT
// ==============================

// Richo
// 12


// ==============================
// PENJELASAN STEP BY STEP
// ==============================

// langkah 1:
createAdder(2)

// value = 2
// owner = "Richo"

// return function add(param)


// langkah 2:
const addTwo = createAdder(2)

// addTwo sekarang menyimpan:
// value = 2
// owner = "Richo"


// langkah 3:
addTwo(10)

// param = 10

// return value + param
// return 2 + 10
// return 12


// ==============================
// INILAH YANG DISEBUT CLOSURE
// ==============================

// Function add masih bisa akses:
// value → 2
// owner → "Richo"

// walaupun createAdder sudah selesai dijalankan


// ==============================
// VISUALISASI MEMORY
// ==============================

// createAdder(2)
//   value = 2
//   owner = "Richo"
//   return add function
//
// add function membawa:
//   value = 2
//   owner = "Richo"


// ==============================
// CONTOH LAIN CLOSURE
// ==============================

function counter() {

    let count = 0;

    return function () {
        count++;
        return count;
    }

}

const hit = counter();

console.log(hit()); // 1
console.log(hit()); // 2
console.log(hit()); // 3


// count tetap diingat oleh function


// ==============================
// KEGUNAAN CLOSURE
// ==============================

// 1. membuat private variable
// 2. membuat function factory
// 3. state management
// 4. callback
// 5. functional programming


// ==============================
// KESIMPULAN
// ==============================

// Closure adalah function yang menyimpan akses
// ke variabel di scope parent-nya
