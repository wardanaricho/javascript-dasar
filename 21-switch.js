// ==============================
// SWITCH STATEMENT DI JAVASCRIPT
// ==============================

// switch digunakan untuk memilih satu kondisi dari banyak pilihan
// berdasarkan nilai variabel


// Variabel karma memiliki nilai "ANJAY"
let karma = "ANJAY";


// Struktur switch

switch (karma) {

    case "BAIK":
        // Jika karma === "BAIK"
        console.log("HIGH HONOR");
        break;
    // break digunakan untuk menghentikan switch

    case "NETRAL":
        // Jika karma === "NETRAL"
        console.log("NOTHING TO BE DONE");
        break;

    case "BURUK":
        // Jika karma === "BURUK"
        console.log("LOW HONOR");
        break;

    default:
        // Jika tidak ada case yang cocok
        console.log("TAMAT, THE END");
}


// ==============================
// OUTPUT
// ==============================

// Karena nilai karma adalah "ANJAY"
// dan tidak ada case "ANJAY"
// maka default dijalankan

// Output:
// TAMAT, THE END


// ==============================
// PENJELASAN BREAK
// ==============================

// break penting agar tidak lanjut ke case berikutnya

// contoh tanpa break:

let contoh = "A";

switch (contoh) {

    case "A":
        console.log("A");

    case "B":
        console.log("B");

    case "C":
        console.log("C");
}

// Output:
// A
// B
// C


// ==============================
// CONTOH SWITCH YANG BENAR
// ==============================

let nilai = "A";

switch (nilai) {

    case "A":
        console.log("Luar biasa");
        break;

    case "B":
        console.log("Bagus");
        break;

    case "C":
        console.log("Cukup");
        break;

    default:
        console.log("Tidak lulus");
}


// ==============================
// KESIMPULAN
// ==============================

// switch → untuk banyak kondisi tetap
// case   → kondisi
// break  → menghentikan switch
// default→ kondisi jika tidak ada yang cocok
