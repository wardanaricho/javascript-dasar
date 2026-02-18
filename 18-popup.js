// ==============================
// ALERT, PROMPT, DAN CONFIRM
// ==============================

// alert(), prompt(), dan confirm() adalah fungsi bawaan browser
// Digunakan untuk interaksi sederhana dengan user

// Catatan:
// hanya bekerja di browser, tidak bekerja di Node.js


// ==============================
// ALERT
// ==============================

// alert() digunakan untuk menampilkan pesan popup

alert("Ini adalah alert");

// Akan menampilkan popup dengan pesan:
// "Ini adalah alert"

// User hanya bisa klik tombol OK


// ==============================
// PROMPT
// ==============================

// prompt() digunakan untuk meminta input dari user

const nama = prompt("Siapa nama Anda?");

// Akan muncul popup dengan input field
// User bisa mengetik nama

// Nilai yang dimasukkan user disimpan di variabel nama

alert("Halo " + nama);

// Contoh:
// User input: Richo
// Output popup: Halo Richo


// ==============================
// CONFIRM
// ==============================

// confirm() digunakan untuk meminta konfirmasi (OK / Cancel)

const konfirmasi = confirm("Apakah Anda yakin?");

// Jika user klik OK → true
// Jika user klik Cancel → false

alert(konfirmasi);

// Output:
// true atau false


// ==============================
// CONTOH KASUS NYATA
// ==============================

const lanjut = confirm("Apakah ingin lanjut?");

if (lanjut) {
    alert("Melanjutkan...");
} else {
    alert("Dibatalkan");
}


// ==============================
// PERBEDAAN
// ==============================

// alert()   → menampilkan pesan
// prompt()  → meminta input (return string)
// confirm() → meminta konfirmasi (return boolean)


// ==============================
// KESIMPULAN
// ==============================

// alert   → output
// prompt  → input text
// confirm → input pilihan OK / Cancel
