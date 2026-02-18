let first = "1";
let second = 2;

let result = first + second;
console.log(result);  // hasilnya 12 seharusnya 3, maka harus di konversi dulu

result = parseInt(first) + second;
console.log(result); // hasilnya 3

// NaN
let angka = "angka";
console.log(parseInt(angka)); // NaN

// operasi pada nan
let angkaPertama = Number("salah");
let angkaKedua = 2;

console.log(angkaPertama + angkaKedua);

// fungsi isNan untuk cek nan
console.log(isNaN(angkaPertama));

