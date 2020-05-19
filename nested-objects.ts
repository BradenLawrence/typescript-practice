// Much like defining key:type pairs within an object, you can nest these definitions as needed
let person4: {
    name: string;
    hobbies: string[];
    pet: {
        species: string;
        age: number;
    };
}

// Above we defined an array that specifically takes only strings. You could also define an array of numbers like this
let favoriteNumbers: number[];

// You can also declare an array that accepts all datatypes by using 'any'
let myStuff: any[];

// This is unadvisable most of the time, because you didn't need typescript to do this. This is just vanilla javascript

// However, by specifically defining the types of an array lets you make safe assumptions about that data
let hobbies: string[];
hobbies = ["video games", "painting", "cooking"]

// We can call .toUpperCase() safely, because we already know everything that could possibly be in hobbies is a string
hobbies.forEach(hobby => console.log( hobby.toUpperCase() ))

// Here we get an error, because TS knows that .toExponential() can only be called on numbers, and we know hobbies does not contain numbers
hobbies.forEach(hobby => console.log( hobby.toExponential(2) ))

