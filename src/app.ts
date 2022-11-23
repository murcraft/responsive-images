const add = (a: number, b: number) => {
    return a + b;
}

const add2 = (a: number, b: number = 1) => a + b;
// const add2 = (a: number = 2, b: number) => a + b; - doesn't work, default works for only the last assigned parameter

console.log(add(2, 4))
console.log(add2(2, 5))
console.log(add2(2))

const printOutput: (output: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', event => console.log(event));
}


const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];

activeHobbies.push(...hobbies)
const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = { ...person };
console.log(activeHobbies);
console.log(copiedPerson);

const add3 = (...numbers: number[]) => {
   return numbers.reduce((curResult, curValue) => {return curResult + curValue}, 0)
}
const addedValues = add3(1, 2, 3, 4, 5);
console.log(addedValues);
