const person = {
    name: "Richo",
    greet: (name) => {
        console.log(this);
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

person.greet("Anjay");

// karena arrow function maka tidak bisa membuat this name di sini