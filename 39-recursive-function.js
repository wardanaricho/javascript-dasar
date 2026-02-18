// ==============================
// FACTORIAL DENGAN LOOP
// ==============================

// factorial adalah perkalian berurutan:
// contoh: 5! = 5 × 4 × 3 × 2 × 1 = 120

function factorial(value) {

    let result = 1;

    for (let i = 1; i <= value; i++) {   // PERBAIKAN: harus i <= value
        result *= i;                    // PERBAIKAN: harus dikali i
    }

    return result;

}

console.log(factorial(5));
// Output: 120



// ==============================
// FACTORIAL DENGAN RECURSIVE FUNCTION
// ==============================

// Recursive function adalah function yang memanggil dirinya sendiri

function factorialRecursive(value) {

    // BASE CASE
    // kondisi berhenti agar tidak infinite loop

    if (value === 1) {
        return 1;
    }

    // RECURSIVE CASE
    // function memanggil dirinya sendiri

    console.log(`${value} * factorialRecursive(${value - 1})`);

    return value * factorialRecursive(value - 1);

}

console.log(factorialRecursive(5));


// ==============================
// CARA KERJA RECURSIVE STEP BY STEP
// ==============================

// factorialRecursive(5)
// = 5 * factorialRecursive(4)
// = 5 * 4 * factorialRecursive(3)
// = 5 * 4 * 3 * factorialRecursive(2)
// = 5 * 4 * 3 * 2 * factorialRecursive(1)
// = 5 * 4 * 3 * 2 * 1
// = 120



// ==============================
// VISUAL CALL STACK
// ==============================

// factorialRecursive(5)
//   factorialRecursive(4)
//     factorialRecursive(3)
//       factorialRecursive(2)
//         factorialRecursive(1)
//         return 1
//       return 2
//     return 6
//   return 24
// return 120



// ==============================
// KOMPONEN PENTING RECURSIVE
// ==============================

// 1. Base case → kondisi berhenti
// contoh:
if (value === 1) {
    return 1;
}

// 2. Recursive call → memanggil diri sendiri
return value * factorialRecursive(value - 1);



// ==============================
// PERBANDINGAN LOOP vs RECURSIVE
// ==============================

// LOOP
function factorialLoop(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


// RECURSIVE
function factorialRec(n) {
    if (n === 1) return 1;
    return n * factorialRec(n - 1);
}



// ==============================
// KAPAN RECURSIVE DIGUNAKAN
// ==============================

// Recursive cocok untuk:
// - factorial
// - tree traversal
// - folder traversal
// - fibonacci
// - algoritma DFS



// ==============================
// CONTOH FIBONACCI RECURSIVE
// ==============================

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(6));
// Output: 8



// ==============================
// KESIMPULAN
// ==============================

// Recursive function adalah function yang memanggil dirinya sendiri
// harus punya base case agar tidak infinite loop
