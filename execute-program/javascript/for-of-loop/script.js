// The for...of loop is used to iterate over iterable objects, like Array, Map, Set, String, TypedArray, arguments object and so on. It returns the values of the iterable object.

// const obj = {
// 	a: 1,
// 	b: 2,
// };

// const keys = [];
// for (const key in obj) {
// 	keys.push(key);
// }

// keys; // ['a', 'b']

// const letters = [];
// letters[3] = "d";
// const keys = [];
// for (const key in letters) {
// 	keys.push(key);
// }
// keys; // ['3']

const numbers = [];
numbers[3] = "a";
const result = [];
for (const n of numbers) {
	result.push(n);
}
result; // [undefined, undefined, undefined, "a"]

const obj = { a: 1, b: 2 };
const keys = [];
for (const key of Object.keys(obj)) {
	keys.push(key);
}
keys; // ['a', 'b']
