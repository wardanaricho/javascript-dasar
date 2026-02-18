// const fullName = ["Richo", "Wardana", "Aricho", "Anjay", "Guninjay", "Washoy"];

// const [firstName, middleName, lastName, ...others] = fullName;

// // const firstName = fullName[0];
// // const lastName = fullName[1];
// // const middleName = fullName[2];

// console.log(firstName);
// console.log(lastName);
// console.log(middleName);
// console.log(others);


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

// const { name, age, address, hobbies, skills } = person;

// console.log(name);
// console.log(age);
// console.log(address);
// console.log(hobbies);
// console.log(skills);

const { name, age, address: { city, country }, ...others } = person;
console.log(name);
console.log(age);
console.log(city);
console.log(country);
console.log(others);


const personObject = {
    firstName: "Richo",
    middleName: "K.",
    lastName: "Wardana"
};

function displayPerson({ firstName, middleName, lastName }) {

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
};

displayPerson(personObject);


function sum([first, second]) {
    return first + second;
}

console.log(sum([1, 2]));


const listNama = ["Richo", "Wardana"];
const [firstName, middleName = "K", lastName] = listNama;

console.log(firstName);
console.log(middleName);
console.log(lastName);


const namaAing = {
    fName: "Richo",
    lName: "Wardana"
};

const { fName, mName = "K.", lName } = namaAing;

console.log(fName);
console.log(mName);
console.log(lName);


const {
    firstN: namaDepan,
    middleN: namaTengah = "K",
    lastN: namaBelakang
} = person;

console.log(namaDepan);
console.log(namaTengah);
console.log(namaBelakang);


