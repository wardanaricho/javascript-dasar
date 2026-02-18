const person = {};

person.firstName = "Wardana";
person.lastName = "Richo";
person.age = 22;
person.isHandsome = true;

console.table(person); // ini menampilkan object person // semuanya

console.log(person.firstName); // menampilkan nama depan
console.log(person.lastName); // menampilkan nama belakang
console.log(person.age); // menampilkan umur
console.log(person.isHandsome); // menampilkan apakah handsome

delete person.isHandsome;

console.table(person);

console.log("____________________________________");

const orang = {
    firstName: "Wardana",
    lastName: "Richo",
    age: 22,
    isHandsome: true
}

console.table(orang);

console.info(orang.firstName + " " + orang.lastName);