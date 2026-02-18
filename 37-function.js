function sayHello(){
    console.log("Hello Dunia");
}
sayHello();

function sayHelloWithParameter(name){
    console.log("Hello " + name);
}
sayHelloWithParameter("Richo");

function sayHelloWithReturn(name, title){
    const nameWithTitle = `Wanjay si ${name} jadi ${title}`;
    return nameWithTitle;
}
console.log(sayHelloWithReturn("Richo", "Adventurer"));

function getSanity(sanity){
    if(sanity < 10){
        return "Sanity is too low";
    }
    if(sanity > 100){
        return "Sanity is too high";
    }
    return "Sanity is normal";
}
console.log(getSanity(70));

function isContains(dataArray, searchValue){
    for(const element of dataArray){
        if(element === searchValue){
            return true;
        }
    }
    return false;
}

const arrAngka = [1,2,3,4,5];
let searchAngka = 3;
console.log(isContains(arrAngka, searchAngka));

// OPTIONAL PARAM
function sayBro(firstNAme, middleName,lastName){
    console.log(`Bro First Name : ${firstNAme}`);
    console.log(`Bro Middle Name : ${middleName}`);
    console.log(`Bro Last Name : ${lastName}`);
}

sayBro("Richo");


// DEFAULT PARAM
function sayHelloWithDefault(name = "World"){
    console.log("Hello " + name);
}
sayHelloWithDefault("Richo");
sayHelloWithDefault();

// REST PARAM
function sayHelloWithRest(...names){
    console.log(names);
}
sayHelloWithRest("Richo", "K", "Adventurer");

function sum(nama, ...dataAngka){
    let total = 0;
    for(const angka of dataAngka){
        total += angka;
    }
    return `${nama} total ${total}`;s
}
console.log(sum("Dark", 1,2,3,4,5));

// SPREAD PARAM
const angka = [1,2,3,4,5,6,7,8,9,10];

function sum(nama, ...dataAngka){
    let total = 0;
    for(const angka of dataAngka){
        total += angka;
    }
    return `${nama} total ${total}`;
}

console.log(sum("Light", ...angka));

// ARGUMENT OBJECT
function oldSum(){
    let total = 0;
    for (const item of arguments){
        total += item;
    }
    console.log(`Total is ${total}`);
}

oldSum(1,2,3,4,5);

// FUNCTION MENJADI VALUE
function sayHello(world){
    console.log("Hello " + world);
}

let say = sayHello;

say("Richo");

function giveMeAName(callback){
    callback("Anjay");
}

giveMeAName(sayHello);
giveMeAName(say);

// ANONYMOUS FUNCTION
let sayHelloAnonymous = function(name){
    console.log("Hello " + name);
}

sayHelloAnonymous("Richo");

// ANONYMOUS FUNCTION DI PARAM
function giveMeANameAnonymous(callback){
    callback("Richo");
}

giveMeANameAnonymous(function(name){
    console.log("Hello " + name);
});


// FUNCTION DI DALAM FUNCTION
function outer(){

    function inner(){
        console.log("Hello World");
    }

    inner();
    inner();
}

outer();
// inner(); ini akan error karena inner berada di outer 