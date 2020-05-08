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