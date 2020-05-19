// Enums are another datatype not native to JavaScript. 
// You are most familiar with the usecase for enums from Redux action creators
// There, we usually define the names of our actions as const variables with descriptive names, 
// and values that are just the string version of that name.

// We want to be able to check that we aren't misspelling the name of the action, 
// so we use those variable names to let us auto-complete and error when we refer to an action that doesn't exist

// Enums are a more structured way to do that
// To create one, we start by typing 'enum' rather than 'let' or 'const', followed by the name, and in curly brackets, the list of things we enumerate
enum Role { ADMIN, USER, GUEST }

// You can see, TS already lists the items we enter as variables
// By default, the value of these items starts at 0, and increments by 1 for each item.

// You can provide your own values if you chose
enum Fruit { APPLE = "APPLE", BANANA = "Yum", PEAR = 4 }

// By convention, these variables are constants, and are identified by using all caps.
// We also use title case on the name of the enum, because TS considers this a custom type, and it is convention to do this for custom types
enum badConvention { nothing, stops="you", From="doing", "this"="though" }

let cat = {
    name: "Rhea",
    role: Role.ADMIN
}

console.log(cat.role);
cat.role += 1
console.log(cat.role);
