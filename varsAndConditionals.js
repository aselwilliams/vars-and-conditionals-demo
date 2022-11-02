/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if(jonSnowAttack > jamieLannisterAttack){
    console.log('Jon Snow has a better attack then Jamie Lannister')
} else if(jamieLannisterAttack >jonSnowAttack){
    console.log('Jamie Lannister has a better attack')
} else {
    console.log('Its a tie')
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

//Jon snow gets attacked by Jamie
if(jonSnowHealth < jamieLannisterAttack){
    console.log('Jon Snow has been slain!!!')
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -=jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

let healthKit = 50;
if((jonSnowHealth + healthKit)>100){
    jonSnowHealth = 100
} else {
    jonSnowHealth +=healthKit;
}
console.log(jonSnowHealth)
// if(jonSnowHealth >= 50){
//     jonSnowHealth = 100;
// } else {
//     jonSnowHealth += 50;
// }

let coinLandsHeads = false;

if(coinLandsHeads ===true){
    console.log('They continue to fight and Jamie takes Jons head')
} else {
    console.log('Jon is allowed to run away')
}

for (let i=1; i<=5; i++){
    jonSnowHealth -= jamieLannisterAttack;
    if(jonSnowHealth<0){
        jonSnowHealth = 0;
    }
    console.log(`Jon Snows health is ${jonSnowHealth}`)

    if(jonSnowHealth <=0){
        console.log('Jon Snow has been Slain')
        break;
    }
}

console.log('Made some changes');