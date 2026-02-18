// ==============================
// DESTRUCTURING DI JAVASCRIPT
// ==============================

// Destructuring adalah fitur untuk mengambil data dari
// array atau object dan menyimpannya ke variabel dengan mudah


// =====================================================
// DESTRUCTURING ARRAY
// =====================================================

const fullName = ["Richo", "Wardana", "Aricho", "Anjay", "Guninjay", "Washoy"];

// mengambil data berdasarkan posisi (index)

const [firstName, middleName, lastName, ...others] = fullName;

// sama seperti:
// const firstName = fullName[0];
// const middleName = fullName[1];
// const lastName = fullName[2];

console.log(firstName);   // Richo
console.log(middleName);  // Wardana
console.log(lastName);    // Aricho
console.log(others);      // ["Anjay", "Guninjay", "Washoy"]


// ...others disebut REST ELEMENT
// digunakan untuk mengambil sisa data



// =====================================================
// DESTRUCTURING OBJECT
// =====================================================

const person = {
    name: "Richo",
    age: 25,
    address: {
        city: "Nganjuk",
        country: "Indonesia"
    },
    hobbies: ["coding", "gaming", "reading"],
    skills: {
        programming: "JavaScript",
    }
};


// destructuring object dan nested object

const {
    name,
    age,
    address: { city, country },
    ...othersObject
} = person;


console.log(name);     // Richo
console.log(age);      // 25
console.log(city);     // Nganjuk
console.log(country);  // Indonesia
console.log(othersObject);
// {
//   hobbies: [...],
//   skills: {...}
// }



// =====================================================
// DESTRUCTURING DI PARAMETER FUNCTION
// =====================================================

const personObject = {
    firstName: "Richo",
    middleName: "K.",
    lastName: "Wardana"
};


// langsung destructuring di parameter

function displayPerson({ firstName, middleName, lastName }) {

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);

}

displayPerson(personObject);


// sama seperti:
// const firstName = personObject.firstName;



// =====================================================
// DESTRUCTURING ARRAY DI PARAMETER FUNCTION
// =====================================================

function sum([first, second]) {

    return first + second;

}

console.log(sum([1, 2])); // 3



// =====================================================
// DEFAULT VALUE DESTRUCTURING ARRAY
// =====================================================

const listNama = ["Richo", "Wardana"];

const [
    firstNama,
    middleNama = "K", // default jika tidak ada
    lastNama
] = listNama;


console.log(firstNama);  // Richo
console.log(middleNama); // Wardana
console.log(lastNama);   // undefined



// =====================================================
// DEFAULT VALUE DESTRUCTURING OBJECT
// =====================================================

const namaAing = {
    fName: "Richo",
    lName: "Wardana"
};

const {
    fName,
    mName = "K.", // default value
    lName
} = namaAing;


console.log(fName); // Richo
console.log(mName); // K.
console.log(lName); // Wardana



// =====================================================
// RENAME VARIABLE SAAT DESTRUCTURING
// =====================================================

const {
    name: namaDepan,
    age: umur
} = person;

console.log(namaDepan); // Richo
console.log(umur);      // 25


// format:
// property: namaVariableBaru



// =====================================================
// DEFAULT + RENAME
// =====================================================

const {
    firstN: namaDepanBaru = "Default",
    middleN: namaTengahBaru = "K",
    lastN: namaBelakangBaru = "Default"
} = person;


// property tidak ada di person
// maka default digunakan

console.log(namaDepanBaru);   // Default
console.log(namaTengahBaru);  // K
console.log(namaBelakangBaru);// Default



// =====================================================
// KEUNTUNGAN DESTRUCTURING
// =====================================================

// 1. kode lebih singkat
// 2. mudah dibaca
// 3. bisa ambil nested data
// 4. bisa default value
// 5. bisa rename variable



// =====================================================
// KESIMPULAN
// =====================================================

// Array destructuring → berdasarkan posisi
// Object destructuring → berdasarkan nama property
