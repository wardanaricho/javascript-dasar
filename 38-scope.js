// ==============================
// SCOPE DI JAVASCRIPT
// ==============================

// Scope adalah area dimana variabel bisa diakses

// Ada 3 jenis scope:
// 1. Global scope
// 2. Local scope (function scope)
// 3. Nested local scope


// ==============================
// GLOBAL SCOPE
// ==============================

// Variabel global bisa diakses dari mana saja

let counter = 0;

function hitMe() {

    // Mengakses variabel global
    counter++;

}

hitMe();
hitMe();
hitMe();

console.log(counter);
// Output: 3

// karena counter global diubah oleh function



// ==============================
// LOCAL SCOPE (FUNCTION SCOPE)
// ==============================

// Variabel local hanya bisa diakses di dalam function

function first() {

    let firstVariable = "first";

}

function second() {

    let secondVariable = "second";

}

first();
second();

// console.log(firstVariable);
// ERROR ❌
// karena firstVariable hanya ada di dalam function first



// ==============================
// CONTOH PENJELASAN LOCAL SCOPE
// ==============================

function test() {

    let localVar = "Saya local";

    console.log(localVar);
}

test();
// Output: Saya local

// console.log(localVar);
// ERROR ❌



// ==============================
// NESTED LOCAL SCOPE
// ==============================

// Function di dalam function bisa mengakses parent variable

function first() {

    let firstVariable = "first";

    function infoFirst() {

        // Bisa akses parent scope
        console.log(firstVariable);

    }

    infoFirst();

}

first();

// Output: first



// ==============================
// CONTOH LAIN NESTED SCOPE
// ==============================

function outer() {

    let outerVar = "Outer";

    function inner() {

        let innerVar = "Inner";

        console.log(outerVar); // bisa
        console.log(innerVar); // bisa

    }

    inner();

    // console.log(innerVar); ❌ ERROR

}

outer();



// ==============================
// RULE SCOPE (ATURAN SCOPE)
// ==============================

// Child bisa akses parent
// Parent tidak bisa akses child


// contoh:

function parent() {

    let parentVar = "Parent";

    function child() {

        let childVar = "Child";

        console.log(parentVar); // bisa

    }

    // console.log(childVar); ❌ ERROR

}



// ==============================
// VISUALISASI SCOPE
// ==============================

// Global scope
//   |
//   |-- function scope
//         |
//         |-- nested scope



// ==============================
// KESIMPULAN
// ==============================

// Global scope → bisa diakses semua
// Local scope → hanya di function
// Nested scope → child bisa akses parent
