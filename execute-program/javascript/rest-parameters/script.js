// function max(...numbers) {
// 	console.log(...numbers); // 1 2 3 4
// 	let max = numbers[0]; // 1
// 	console.log(max); // 1
// 	for (const n of numbers) {
// 		if (n > max) {
// 			max = n;
// 		}
// 	}
// 	return max; //
// }
// max(1, 2, 3, 4); // 4

// function sum(...numbers) {
// 	let total = 0;
// 	for (const n of numbers) {
// 		total += n;
// 	}
// 	return total;
// }
// const sums = [sum(), sum(100), sum(2000, 1), sum(-500, -300)]; // [0, 100, 2001, -800]

// Rest parameters can be used after regular positional parameters

function addMany(toAdd, ...numbers) {
	console.log(toAdd); // 2
	const result = [];
	for (const n of numbers) {
		result.push(n + toAdd);
	}
	return result;
}
addMany(2, 1, 7.7, 1000); // [3, 9.7, 1002]

// // We have seen rest parameters in function definitions. But they also work when calling a function.

// function add(x, y) {
// 	return x + y;
// }

// const nums = [1, 2];
// add(...nums); // 3
