// Tuples are not native to JavaScript. They exist in other programming languages though, and TS lets us recreate them
// Essenctially, tuples are very specific arrays. Unlike normal arrays, you can't just push things into them, or pop things out of them.
// Tuples instead have a very defined structure for example:

let account = {
    name: "Bob",
    role: [2, "admin"]
}

// the value of role could be a Tuple. Roles could have a value, indicating the role's permissions, and a string, providing the name for that role
// It wouldn't make sense to push something into this, because we don't really care about other values in this array
// Additionally, we never want to remove items from this array either, because then it would lose some of its functionality.
// That makes this a great candidate for a tuple

// When TS sees the values we assign, it makes an assumption that we want an array with items that could be either numbers or strings
// But in this case, the type inference doesn't give us what we want, so we need to specifically define them like this:

let betterAccount: {
    name: string;
    role: [number, string];
} = {
    name: "Bob",
    role: [2, "admin"]
}

// Now that we've defined the first item to be a number, and the second item to be a string, that lets us get type errors like this:
// TS knows the first item of the array must be a number, so it errors when we try to reassign it
betterAccount.role[0] = "two";

// But it doesn't fail when we give it a number
betterAccount.role[0] = 1;

// It also errors when we try to alter the size of the array
betterAccount.role = [1, "guest", "hi"];

// Be aware however that you can still mutate the array using push and pop. Lame, right?
betterAccount.role.push("Hi");
betterAccount.role.pop();