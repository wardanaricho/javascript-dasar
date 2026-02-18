// ==============================
// ARROW FUNCTION DI OBJECT METHOD
// ==============================

// Arrow function TIDAK memiliki this sendiri
// Arrow function menggunakan this dari scope LUAR (lexical scope)

const person = {
    name: "Richo",
    greet: (name) => {
        // this BUKAN person
        // this di sini adalah this dari scope luar
        console.log(this);
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

person.greet("Anjay");


// ==============================
// OUTPUT (Node.js)
// ==============================

// {}
// Hello Anjay, my name is undefined


// ==============================
// PENJELASAN
// ==============================

// Arrow function tidak membuat this sendiri

// this di sini menunjuk ke global scope
// bukan ke object person

// sehingga:

// this.name → undefined

// karena global object tidak punya property name


// ==============================
// PERBEDAAN DENGAN FUNCTION BIASA
// ==============================

const person2 = {
    name: "Richo",
    greet: function (name) {
        // this menunjuk ke person2
        console.log(this);
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

person2.greet("Anjay");


// Output:
// { name: "Richo", greet: function }
// Hello Anjay, my name is Richo


// ==============================
// KENAPA BISA BEGITU?
// ==============================

// Arrow function → this dari luar
// Function biasa → this dari object pemanggil


// ==============================
// VISUALISASI
// ==============================

// Arrow function:

// global this → {}
//   |
//   greet arrow function → pakai global this


// Function biasa:

// person object → greet function → this = person


// ==============================
// RULE PENTING
// ==============================

// ❌ Jangan gunakan arrow function untuk object method
// jika membutuhkan this

// ✅ Gunakan function biasa


// ==============================
// CARA BENAR
// ==============================

const person3 = {
    name: "Richo",
    greet(name) {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}
person3.greet("Anjay");


// Output:
// Hello Anjay, my name is Richo


// ==============================
// KESIMPULAN
// ==============================

// Arrow function tidak punya this sendiri
// Arrow function mewarisi this dari scope luar
// Gunakan function biasa untuk object method
