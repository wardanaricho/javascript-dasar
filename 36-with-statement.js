const person = {
    firstName: 'Richo',
    lastName: 'Wardana',
    age: 26
}

/** 
 * 
 * contoh masalah
 * 
 */

const firstName = 'Anjay';
const lastName = 'Guninjay';
 
/**
 * 
 */



// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

with(person){
    console.log(firstName);
    console.log(lastName);
    console.log(age);
}

// TIDAK DIREKOMENDASIKAN