// loopi:
// for(let i = 0; i < 100; i++){
//     loopj:
//     for(let j = 0; j < 10; j++){
//         console.log(`${i} - ${j}`);
//     }
// }

loopi:
for(let i = 0; i < 100; i++){
    loopj:
    for(let j = 0; j < 10; j++){
        if(j > 10){
            continue loopi;
        }
        console.log(`${i} - ${j}`);
    }
}