// factorial loop
function factorial(value){
    let result = 1;
    for (let i = 1; i< value;i++){
        result *= 1;
    }
    return result;
}

function factorialRecursive(value){
    if(value === 1){
        return 1;
    }else{
        console.log(`${value} * factorialRecursive(${value - 1})`);
        
        return value * factorialRecursive(value - 1);
    }
}

factorialRecursive(10);