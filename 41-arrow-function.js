const sayHello = (name) => {
    console.log("Hello", name);
}

sayHello("Wardana");

const sayHi = (nama) => console.log(`Hello ${nama}`);

sayHi("Richo");


function giveMeAName(callback){
    callback("Richo");
}


giveMeAName((nama) => console.log(`Hello ${nama}`));