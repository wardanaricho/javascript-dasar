// ==============================
// OBJECT METHOD DI JAVASCRIPT
// ==============================

// Object method adalah function yang berada di dalam object

// Object person
const person = {
    // Property (data)
    nama: "Richo",
    // Method (function di dalam object)
    sayHello: function (nama) {
        console.log(`Hello ${nama}`);
    }
}


// Memanggil object method
person.sayHello("Anjay");

// Output:
// Hello Anjay



// ==============================
// PENJELASAN
// ==============================

// person → object
// nama → property
// sayHello → method

// Method adalah function yang dimiliki oleh object


// ==============================
// CARA KERJA
// ==============================

// person.sayHello("Anjay")

// person → object
// sayHello → method
// ("Anjay") → parameter


// ==============================
// METHOD MENGAKSES PROPERTY SENDIRI
// ==============================

// Gunakan keyword "this"

const user = {
    nama: "Richo",
    sayHello: function () {
        console.log(`Hello, nama saya ${this.nama}`);
    }
}

user.sayHello();

// Output:
// Hello, nama saya Richo


// this.nama → mengakses property milik object itu sendiri



// ==============================
// CARA MODERN (METHOD SHORTHAND)
// ==============================

const admin = {
    nama: "Wardana",
    sayHello(nama) {
        console.log(`Hello ${nama}, saya ${this.nama}`);
    }
}

admin.sayHello("Anjay");


// ==============================
// PERBEDAAN PROPERTY vs METHOD
// ==============================

// Property → data
// Method → function

const contoh = {
    nama: "Richo", // property
    hello: function () { // method
        console.log("Hello");
    }
}


// ==============================
// KESIMPULAN
// ==============================

// Method adalah function di dalam object
// dipanggil dengan object.method()
