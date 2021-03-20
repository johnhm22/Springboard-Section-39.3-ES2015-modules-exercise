import {choice, remove} from './helpers';
import fruits from './food';


function offerFruit(){
    let randomFruit = choice(fruits);
    console.log(`I'd like one ${randomFruit}, please`);
    console.log(`Here you go: ${randomFruit}`);
    console.log("Delicious! May I have another?");
    let idx = fruits.indexOf(randomFruit);
    remove(fruits, idx);
    console.log(`I'm sorry, we're all out. We have ${fruits.length}`)
};

offerFruit();