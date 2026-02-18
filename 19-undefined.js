let nama;

console.log(typeof(nama));

nama = "Richo";

if(nama === undefined){
    console.log("Nama belum diisi");
}else{
    console.log("Nama sudah diisi");
}


// WITH ARRAY
const names = ["Richo", "Wardana"];

console.log(typeof(names[2]));

// names.push("Wanjay"); // coba di isi

if(names[2] === undefined){
    console.log("Nama belum diisi");
}else{
    console.log("Nama sudah diisi " + names[2]);
}

// WITH OBJECT
const person = {};

// person.name = "Richo"; // coba di isi

if(person.name === undefined){
    console.log("Nama belum diisi");
}else{
    console.log("Nama sudah diisi " + person.name);
}