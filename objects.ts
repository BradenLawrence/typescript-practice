// Here's a regular 'ol object
const person = {
    name: "Braden",
    age: 34
}

// Trying to log something that doesn't exist on person causes an error
console.log(person.nickname);

// This is because Typescript is inferring the structure of the person object by the way we initially set it
// We gave a string to the name key, and a number to the age key, therefore, it expects that person will always be an object, 
// and its only properties will be that, a name with a string, and an age with a number.

// Here is a peek at what TS inferred:
// const person: {
//     name: string;
//     age: number;
// }

// These object type declarations look similar to objects, but have a few key differences,
// The name of the variable is followed by a ':', not an '='. This tells TS we are not assigning it, we are defining its type
// The key:value pairs are separated by ';', not ','s. and following each key there is a datatype, not a value.
// These should actually be called key:type pairs

const person2: object = {
    name: "Jen",
    age: 32
}

// In this example, we are creating a person variable and telling TS it is an object, but not defining anything more specific than that
// We are then assigning it to some data as before.

// Trying to log anything from this object will cause an error though, because we've essentially told TS to not expect anything inside this object
console.log(person2.name);

// You can explicitly allow objects with a certain structure using this syntax
const person3: {
    name: string;
    age: number;
} = {
    name: "Malcom",
    age: 41
}

// This example is a bit silly however, because what we've typed above is exactly what TS was inferring in the first place