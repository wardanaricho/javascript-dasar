// ==============================
// PENJELASAN KEYWORD "this"
// ==============================

// this adalah keyword khusus di JavaScript
// yang merujuk ke object yang MEMANGGIL function


// ==============================
// this DI GLOBAL SCOPE
// ==============================

console.info(this);

// Penjelasan:
// Jika di browser → this = window object
// Jika di Node.js → this = module.exports (bukan global secara langsung)

// contoh di browser:
// this === window → true

// contoh di Node.js:
// this === global → false
// karena Node menggunakan module system



// ==============================
// this DI DALAM OBJECT METHOD
// ==============================

const person = {
    nama: "Richo",
    cursedTech: "PHP",
    say: function (nama) {
        // this merujuk ke object yang memanggil method ini
        // yaitu object person
        console.log(`Hi ${nama}, my name is ${this.nama}`);
    }
}


// Method dipanggil oleh object person
person.say("Anjay");


// Output:
// Hi Anjay, my name is Richo


// ==============================
// PENJELASAN INTERNAL
// ==============================

// person.say("Anjay")

// artinya:
// object yang memanggil = person

// maka:
// this = person

// this.nama = person.nama
// = "Richo"


// ==============================
// VISUALISASI
// ==============================

// person = {
//   nama: "Richo",
//   say: function
// }

// this → menunjuk ke person


// ==============================
// CONTOH PENTING (this tergantung pemanggil)
// ==============================

const user = {
    nama: "User",
    say: function () {
        console.log(this.nama);
    }

}

const admin = {
    nama: "Admin"
}


// assign function user.say ke admin
admin.say = user.say;

// sekarang admin yang memanggil
admin.say();


// Output:
// Admin

// karena this = admin
// bukan user


// ==============================
// CONTOH TANPA OBJECT
// ==============================

function test() {
    console.log(this);
}
test();


// browser → window
// node.js → global atau module.exports


// ==============================
// KESIMPULAN INTI
// ==============================

// this SELALU menunjuk ke object yang memanggil function

// person.say() → this = person
// admin.say() → this = admin
// test() → this = global/window
