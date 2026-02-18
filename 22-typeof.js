let tipe;

// tipe = 123;
// tipe = "Halo dunia";
// tipe = true;
tipe = {nama: "Richo"};
// tipe = [1,2,3];
// tipe = function(){};
// tipe = undefined;
// tipe = Symbol("id");
// tipe = 123n;
// tipe = null;

if(typeof tipe === "number"){
    console.log(`${tipe} = Tipe data number`);
}else if(typeof tipe === "string"){
    console.log(`${tipe} = Tipe data string`);
}else if(typeof tipe === "boolean"){
    console.log(`${tipe} = Tipe data boolean`);
}else if(typeof tipe === "object"){
    console.log(`${tipe} = Tipe data object (ini perilaku khusus JS)`);
}else if(typeof tipe === "function"){
    console.log(`${tipe} = Tipe data function`);
}else if(typeof tipe === "undefined"){
    console.log(`${tipe} = Tipe data undefined`);
}else if(typeof tipe === "symbol"){
    console.log(`${tipe} = Tipe data symbol`);
}else if(typeof tipe === "bigint"){
    console.log(`${tipe} = Tipe data bigint`);
}else{
    console.log(`${tipe} = Tidak dikenali`);
}

