let person = {};

// let address = person.address.street; // ini ERROR
let address = person?.address?.street; // ini tidak error
console.log(address);

