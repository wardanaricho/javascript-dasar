// && adalah DAN
// || adalah ATAU
// // ! adalah NOT/UNARY

let result = true && true; 
console.log(result); // true

result = true && false;
console.log(result); // false

result = false && true;
console.log(result); // false

result = false && false;
console.log(result); // false

result = true || true;
console.log(result); // true

result = true || false;
console.log(result); // true

result = false || true;
console.log(result); // true

result = false || false;
console.log(result); // false

result = !true;
console.log(result); // false

result = !false;
console.log(result); // true

let score = 8;

let pass = score >= 7 && score <= 10;
console.log(pass); // true

let fail = score < 7 || score > 10;
console.log(fail); // false

let notPass = !(score >= 7 && score <= 10);
console.log(notPass); // false


