// Vanilla JS
// const add = (n1, n2) => {
//     if(typeof n1 === "number" && typeof n2 === "number") {
//         return n1 + n2
//     }
//     else {
//         return new Error("both arguments must be numbers!")
//     }
// }

// TypeScript
const add = (n1: number, n2: number) => {
    return n1 + n2
}

const number1 = "5";
const number2 = 4;

console.log(add(number1, number2))



// Type Inference

// Typescript will take a good guess at what we want a variable's datatype to be
// Here, we create a const variable. TS infers that it is a number because that's what we assign to it.
// Moreover, it specifically says it is the number 5, because it is a const and cannot change.
const myNum = 5;

// Here we make a let variable, and instead of calling it 7 specifically, 
// it can only infer that anotherNum is a number, which we can see when we try to assign it as 8, followed by "dog"
// "dog" throws an error, because TS knows it should be a number based on the way it was created.
let anotherNum = 7;
anotherNum = 8;
anotherNum = "dog";

// Semantically, this is the same as manually setting the datatype like this
let yetAnotherNum: number = 7;

// But we only need to do that when we don't assign a value at the time of creation
let myString: string;
myString = "dog";
myString = 9;