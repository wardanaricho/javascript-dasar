let data = "";
if(data){
    console.log("Data is truthy");
} else {
    console.log("Data is falsy");
}

/*
========================
FALSY VALUES (HANYA INI)
========================

false
0
-0
0n
""      (empty string)
null
undefined
NaN


========================
TRUTHY VALUES (SEMUA SELAIN DI ATAS)
========================

true

// semua number selain 0 dan -0
1
-1
0.1
-0.1
Infinity
-Infinity

// semua string yang TIDAK kosong
" "
"0"
"false"
"null"
"undefined"
"hello"

// semua object
{}
{a:1}

// semua array (bahkan kosong)
[]
[1,2,3]

// semua function
function(){}
()=>{}

// semua Date
new Date()

// semua BigInt selain 0n
1n
999n

// semua Symbol
Symbol()
Symbol("test")

// semua RegExp
/regex/

// semua class instance
new MyClass()


========================
SUMMARY PALING PENTING
========================

FALSY hanya 8:

false
0
-0
0n
""
null
undefined
NaN


TRUTHY adalah SEMUA selain itu.

*/
