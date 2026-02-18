// ==============================
// GETTER DAN SETTER DI JAVASCRIPT
// ==============================

// Getter dan Setter adalah fitur object
// yang memungkinkan kita membaca dan mengubah property
// menggunakan syntax seperti property biasa,
// tapi sebenarnya menjalankan function


const person = {
    name: "Richo",
    hobby: "Gaming",
    isProgrammer: true,

    // ==============================
    // GETTER
    // ==============================

    // Getter digunakan untuk mengambil / membaca data
    // dipanggil saat kita mengakses person.fullInfo

    get fullInfo() {
        // this merujuk ke object person
        return `${this.name} - ${this.hobby} - ${this.isProgrammer}`;
    },


    // ==============================
    // SETTER
    // ==============================

    // Setter digunakan untuk mengubah data
    // dipanggil saat kita assign person.fullInfo = value

    set fullInfo(value) {
        // value adalah string yang diberikan
        const arr = value.split(" ");
        // contoh:
        // "Richo Anjay true"
        // menjadi:
        // ["Richo", "Anjay", "true"]

        this.name = arr[0];
        // name = "Richo"
        this.hobby = arr[1];
        // hobby = "Anjay"
        this.isProgrammer = arr[2] === "true";
        // "true" === "true" → true
    }
}


// ==============================
// MEMANGGIL SETTER
// ==============================

// ini memanggil set fullInfo(value)

person.fullInfo = "Richo Anjay true";


// setter akan mengubah property object


// ==============================
// HASIL SETELAH SETTER DIPANGGIL
// ==============================

console.log(person.name);
// Output: Richo

console.log(person.hobby);
// Output: Anjay

console.log(person.isProgrammer);
// Output: true



// ==============================
// MEMANGGIL GETTER
// ==============================

console.log(person.fullInfo);

// Output:
// Richo - Anjay - true


// ==============================
// PENJELASAN PENTING
// ==============================

// Getter → dipanggil saat membaca property
// Setter → dipanggil saat mengubah property

// tanpa tanda kurung ()
// seperti property biasa


// ==============================
// VISUALISASI
// ==============================

// person.fullInfo = "Richo Anjay true"
//   |
//   memanggil setter
//   |
//   mengubah name, hobby, isProgrammer


// console.log(person.fullInfo)
//   |
//   memanggil getter
//   |
//   mengembalikan string


// ==============================
// KEUNTUNGAN GETTER DAN SETTER
// ==============================

// 1. kontrol akses property
// 2. validasi data
// 3. membuat property virtual
// 4. encapsulation


// ==============================
// KESIMPULAN
// ==============================

// get → membaca property
// set → mengubah property
// terlihat seperti property biasa
// tapi sebenarnya function
