// ==============================
// FUNCTION DASAR
// ==============================

// Function adalah blok kode yang bisa dipanggil kembali

function sayHello() {
    console.log("Hello Dunia");
}

// Memanggil function
sayHello();
// Output: Hello Dunia



// ==============================
// FUNCTION DENGAN PARAMETER
// ==============================

// Parameter adalah input untuk function

function sayHelloWithParameter(name) {
    console.log("Hello " + name);
}

sayHelloWithParameter("Richo");
// Output: Hello Richo



// ==============================
// FUNCTION DENGAN RETURN VALUE
// ==============================

// return digunakan untuk mengembalikan nilai

function sayHelloWithReturn(name, title) {
    const nameWithTitle = `Wanjay si ${name} jadi ${title}`;
    return nameWithTitle;
}

console.log(sayHelloWithReturn("Richo", "Adventurer"));
// Output: Wanjay si Richo jadi Adventurer



// ==============================
// RETURN MENGHENTIKAN FUNCTION
// ==============================

function getSanity(sanity) {

    if (sanity < 10) {
        return "Sanity is too low";
    }

    if (sanity > 100) {
        return "Sanity is too high";
    }

    return "Sanity is normal";
}

console.log(getSanity(70));
// Output: Sanity is normal



// ==============================
// FUNCTION MENCARI DATA DI ARRAY
// ==============================

function isContains(dataArray, searchValue) {

    for (const element of dataArray) {

        if (element === searchValue) {
            return true;
        }

    }

    return false;
}

const arrAngka = [1, 2, 3, 4, 5];
let searchAngka = 3;

console.log(isContains(arrAngka, searchAngka));
// Output: true



// ==============================
// OPTIONAL PARAMETER
// ==============================

// Parameter boleh tidak diisi → nilainya undefined

function sayBro(firstName, middleName, lastName) {

    console.log(`Bro First Name : ${firstName}`);
    console.log(`Bro Middle Name : ${middleName}`);
    console.log(`Bro Last Name : ${lastName}`);

}

sayBro("Richo");

// Output:
// Richo
// undefined
// undefined



// ==============================
// DEFAULT PARAMETER
// ==============================

function sayHelloWithDefault(name = "World") {

    console.log("Hello " + name);

}

sayHelloWithDefault("Richo");
sayHelloWithDefault();

// Output:
// Hello Richo
// Hello World



// ==============================
// REST PARAMETER
// ==============================

// Rest parameter menampung banyak parameter menjadi array

function sayHelloWithRest(...names) {

    console.log(names);

}

sayHelloWithRest("Richo", "K", "Adventurer");
// Output: ["Richo", "K", "Adventurer"]



// ==============================
// REST PARAMETER UNTUK PENJUMLAHAN
// ==============================

function sum(nama, ...dataAngka) {

    let total = 0;

    for (const angka of dataAngka) {
        total += angka;
    }

    return `${nama} total ${total}`;
}

console.log(sum("Dark", 1, 2, 3, 4, 5));
// Output: Dark total 15



// ==============================
// SPREAD OPERATOR
// ==============================

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sum("Light", ...angka));
// Output: Light total 55



// ==============================
// ARGUMENT OBJECT (CARA LAMA)
// ==============================

function oldSum() {

    let total = 0;

    for (const item of arguments) {
        total += item;
    }

    console.log(`Total is ${total}`);

}

oldSum(1, 2, 3, 4, 5);
// Output: Total is 15



// ==============================
// FUNCTION SEBAGAI VALUE
// ==============================

function sayHello(world) {

    console.log("Hello " + world);

}

let say = sayHello;

say("Richo");
// Output: Hello Richo



// ==============================
// CALLBACK FUNCTION
// ==============================

function giveMeAName(callback) {

    callback("Anjay");

}

giveMeAName(sayHello);
giveMeAName(say);

// Output:
// Hello Anjay
// Hello Anjay



// ==============================
// ANONYMOUS FUNCTION
// ==============================

// Function tanpa nama

let sayHelloAnonymous = function (name) {

    console.log("Hello " + name);

}

sayHelloAnonymous("Richo");



// ==============================
// ANONYMOUS FUNCTION SEBAGAI PARAMETER
// ==============================

function giveMeANameAnonymous(callback) {

    callback("Richo");

}

giveMeANameAnonymous(function (name) {

    console.log("Hello " + name);

});



// ==============================
// FUNCTION DI DALAM FUNCTION
// ==============================

function outer() {

    function inner() {
        console.log("Hello World");
    }

    inner();
    inner();

}

outer();

// inner(); ❌ ERROR
// karena inner hanya bisa diakses di dalam outer



// ==============================
// KESIMPULAN SEMUA KONSEP
// ==============================

// function → blok kode yang bisa dipanggil
// parameter → input function
// return → mengembalikan nilai
// default param → nilai default
// rest param → banyak parameter
// spread → memecah array
// callback → function sebagai parameter
// anonymous → function tanpa nama
// nested function → function di dalam function
