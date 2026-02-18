// global scope
let counter = 0;

function hitMe(){
    counter++;
}

hitMe();
hitMe();
hitMe();

console.log(counter);

// local scope
function first(){
    let firstVariable = "first";
}

function second(){
    let secondVariable = "second";
}

first();
second();

// console.log(firstVariable); error karena akses ke dalam local variabel function first



// nested local scope
function first(){
    let firstVariable = "first";

    function infoFirst(){
        console.log(firstVariable);
        
    }

    infoFirst();
}

first();
