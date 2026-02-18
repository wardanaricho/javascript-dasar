const person = {
    firstName: "Richo",
    lastName: "Wardana",
    age: 20
};

// const result = "firstName" in  person;
const result = "tidakAda" in  person;
console.log(result);

const arrayPerson = [null, "lastName", "age"];

const resultArray = 0 in arrayPerson;

console.log(resultArray);

const personUndefined = {
    firstName: undefined
};
const resultUndefined = "firstName" in personUndefined;
console.log(resultUndefined);