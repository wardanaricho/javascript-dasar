// ==============================
// DEBUGGER DI JAVASCRIPT
// ==============================

// debugger adalah keyword untuk menghentikan eksekusi program
// dan membuka mode debugging di browser atau DevTools


function createFullName(firstName, middleName, lastName) {

    // debugger akan menghentikan program di baris ini
    debugger;

    // Anda bisa melihat nilai variabel:
    // firstName → "Richo"
    // middleName → "K"
    // lastName → "Wardana"

    const fullName = `${firstName} ${middleName} ${lastName}`;

    return fullName;

}


// Memanggil function
createFullName("Richo", "K", "Wardana");



// ==============================
// APA YANG TERJADI SAAT DEBUGGER DIJALANKAN
// ==============================

// Jika DevTools terbuka:
// → program akan berhenti di baris debugger;
// → Anda bisa melihat isi variabel
// → Anda bisa menjalankan kode step by step


// ==============================
// CARA MENGGUNAKAN DEBUGGER DI BROWSER
// ==============================

// 1. buka browser
// 2. tekan F12
// 3. buka tab "Sources"
// 4. jalankan kode
// 5. program akan berhenti di debugger;


// ==============================
// YANG BISA DILAKUKAN SAAT DEBUGGING
// ==============================

// melihat nilai variabel
// melihat call stack
// menjalankan step by step
// menemukan bug


// ==============================
// CONTOH DEBUGGING
// ==============================

function tambah(a, b) {

    debugger;

    let result = a + b;

    return result;

}

tambah(5, 10);


// saat berhenti:
// a = 5
// b = 10


// ==============================
// DEBUGGER VS console.log
// ==============================

// console.log → hanya menampilkan nilai

// debugger → menghentikan program dan bisa inspeksi semua


// ==============================
// KAPAN DIGUNAKAN
// ==============================

// saat mencari bug
// saat ingin melihat alur program
// saat ingin melihat isi variabel


// ==============================
// KESIMPULAN
// ==============================

// debugger menghentikan eksekusi untuk debugging
