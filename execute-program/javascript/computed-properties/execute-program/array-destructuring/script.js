// Array destructuring with rest syntax:

const letters = ["a", "b", "c", "d", "e"];
const [a, b, ...others] = letters;
others; // ['c', 'd', 'e']

// String array destructuring:

// const letters = ["a", "b", "c"];
// const [a, b, c] = letters;
// a, b, c; // 'a', 'b', 'c'

// Rest parameters with strings:
const s = "xyz";
const [...chars] = s;
chars; // ['x', 'y', 'z']; Rest parameters always return an array.
