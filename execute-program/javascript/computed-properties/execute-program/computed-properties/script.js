// We can write object keys as unquoted words like Amir in this example:

// const loginCount = { Amir: 5 };
// loginCount.Amir; // 5

// We can also create objects with computed keys. To do that, wrap the key in square brakcets: { [someVariable]: 1 }

// const name = "Amir";
// const loginCounts = { [name]: 5 };
// loginCounts.Amir; // 5
// The expression inside the square brackets is evaluated and the result is used as the property name (key).
// In the example above, the name variable pointed to 'Amir', so the key was 'Amir'.
// But property names can be anything, not just variables.
// We can use string concatenation to create a key dynamically:
// const loginCounts = { ['Be' + 'tty']: 7 };
// loginCounts.Betty; // 7

// const loginCounts = { [`bett + y`]: 7 };
// loginCounts[`bett + y`]; // 7

// const betty = {
// 	name: "Betty",
// 	emailConfirmed: true,
// 	yearJoined: 2018,
// };

// function getYearJoined(user) {
// 	return { [user.name]: user.yearJoined };
// }

// getYearJoined(betty); // { Betty: 2018 }

// const users = [
//   {name: 'Amir', loginCount: 5},
//   {name: 'Betty', loginCount: 16},
// ]

// function loginCount(user) {
//   return { [user.name]: user.loginCount };
// }

// loginCount(users[0]); // { Amir: 5 }
// loginCount(users[1]); // { Betty: 16 }
