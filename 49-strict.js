// ==============================
// "use strict" DI JAVASCRIPT
// ==============================

// "use strict" adalah mode khusus JavaScript
// yang membuat JavaScript berjalan lebih ketat (strict)
// untuk mencegah error dan praktik buruk


function useStrictMode() {

    // Mengaktifkan strict mode
    'use strict';


    const person = {
        firstName: "Richo",
        lastName: "Wardana"
    }


    // ❌ ERROR di strict mode
    with (person) {

        console.log(firstName);
        console.log(lastName);

    }

}

useStrictMode();


// ==============================
// ERROR YANG TERJADI
// ==============================

// SyntaxError: Strict mode code may not include a with statement


// ==============================
// KENAPA ERROR?
// ==============================

// karena "with" dilarang di strict mode

// alasan:
// 1. membuat kode ambigu
// 2. sulit di-debug
// 3. memperlambat JavaScript engine
// 4. berbahaya untuk keamanan



// ==============================
// CARA YANG BENAR (STRICT MODE)
// ==============================

function useStrictModeFixed() {

    'use strict';

    const person = {
        firstName: "Richo",
        lastName: "Wardana"
    }

    // akses langsung

    console.log(person.firstName);
    console.log(person.lastName);

}

useStrictModeFixed();



// ==============================
// APA SAJA YANG BERUBAH DI STRICT MODE
// ==============================


// 1. Tidak boleh pakai variable tanpa deklarasi

'use strict';

// x = 10; ❌ ERROR
// harus:
let x = 10;


// ==============================
// 2. Tidak boleh duplicate parameter

// function test(a, a){} ❌ ERROR


// ==============================
// 3. this di function menjadi undefined

function testThis() {

    'use strict';

    console.log(this);

}

testThis();

// Output:
// undefined

// tanpa strict mode:
// this = window (browser)


// ==============================
// 4. Tidak boleh pakai with

// with(object){} ❌ ERROR



// ==============================
// KEUNTUNGAN STRICT MODE
// ==============================

// ✅ mencegah bug
// ✅ lebih aman
// ✅ lebih cepat
// ✅ best practice modern JS



// ==============================
// REKOMENDASI
// ==============================

// gunakan strict mode di semua file JavaScript

'use strict';


// ==============================
// KESIMPULAN
// ==============================

// strict mode membuat JavaScript lebih aman dan ketat
