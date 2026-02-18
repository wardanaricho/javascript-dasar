let counter = 1;

while(true){
    console.log(`Perulangan ke ${counter}`);
    counter++;

    if(counter >= 5){
        break;
    }
    
}

console.log("=================================");

for(let counter = 1; counter <= 100; counter++){
    if(counter %2 == 0){
        continue;
    }
    console.log(counter);
}
