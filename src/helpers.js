import fruits from './food';

let fruit;

function choice(fruits){
    fruit = Math.floor(Math.random()*fruits.length);
    return fruits[fruit]
};

function remove(fruits, fruit){
if(!fruits.includes(fruits[fruit])){
    return undefined
}

return fruits.splice(fruit, 1)
}

export{choice, remove};