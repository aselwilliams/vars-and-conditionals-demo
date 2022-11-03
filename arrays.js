let backpack = [];

//let's add sword, shirld, food

backpack.push('sword','shield','food');
console.log(backpack)

// backpack.shift()
let sword=backpack.splice(0, 1)
// backpack = backpack.slice(1)


let furCoat = 'fur Coat';
backpack.push(furCoat)

backpack.pop()
let itemCount = backpack.length;
backpack.push('flint')
backpack.push('blanket')
backpack.push('knife')
backpack.push('toothbrush')

let backpack2 = backpack.splice(2,4)

// console.log([...backpack2])
// console.log(backpack2[0])
// for(let i=0; i<3; i++){
//     console.log(backpack2[i])
// }
// for(let i=0; i<backpack.length; i++){
//     console.log(backpack[i])
// }

// console.log(`Backpack count: ${itemCount}`)
// console.log('Backpack2: ',backpack2)
// console.log('Backpack: ',backpack);

let guessMe = 54;

while (guessMe < 100) {
    console.log('----------');
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5.  Added 25.');
        guessMe += 25;
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3.  Subtracted 27.');
        guessMe -= 27;
    } else {
        console.log('Added 3.');
        guessMe += 3;
    }
    guessMe += 22;
    console.log(`guessMe is now ${guessMe}.`);
}
console.log(guessMe)