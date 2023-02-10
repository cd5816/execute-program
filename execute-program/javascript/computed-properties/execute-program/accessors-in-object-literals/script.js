function sum(x, y) {
	return x + y;
}

sum(1, 2);
//Modern JavaScript streamlines this syntax with the `get` keyword.
// To use it, we declare the object property as a function starting with `get`.
// We access the property with the usual `user.userName` syntax.
// The function is automatically called and we get its return value. This property is called a “getter.”

// const user = {
// 	get firstName() {
// 		return "Caleb";
// 	},
// };
// user.firstName; // Caleb

// Add a userName getter to this object. It should return the value of the name variable.

// let firstName = "Amir";

// const user = {
// 	get userName() {
// 		return firstName;
// 	},
// };

// user.userName; // Amir

// const userName1 = user.userName;
// firstName = "Betty";
// user.userName; // Betty
// const userName2 = user.userName;
// [userName1, userName2]; // ["Amir", "Betty"]
// console.log(userName1, userName2); // Amir Betty

// The setter function is called when we assign a value to the property. This property is called a “setter.”

// const user = {
// 	realName: "Caleb",
// 	lastName: "Dismuke",
// 	set userName(newName) {
// 		this.realName = newName;
// 	},
// };

// user.userName = "Kelly";
// user.realName; // Kelly
// user.userName; // Kelly

// Example...............................................

// const kid = {
// 	firstName: "Ella",
// 	set lastName(newLastName) {
// 		// return firstName + ' ', newLastName;
// 		return `${this.firstName} ${newLastName}`;
// 	},
// };

// kid.lastName = "Dismuke";
// kid.lastName; // Ella Dismuke

// Example...............................................

// const user = {
// 	realName: "Amir",
// 	get userName() {
// 		return this.realName;
// 	},
// 	set userName(newName) {
// 		this.realName = newName;
// 	},
// };

// user.userName = "Betty";
// user.userName; // Betty
// [user.realName, user.userName]; // ["Betty", "Betty"]

// Example...............................................

// const user = {
// 	names: ["Amir"],
// 	set userName(newName) {
// 		this.names.push(newName);
// 	},
// };

// user.userName = "Betty";
// user.names; // ["Amir", "Betty"]

// Example...............................................

// function createUser(userName) {
// 	return {
// 		names: [userName],
// 		get userName() {
// 			return this.names[this.names.length - 1];
// 		},
// 		set userName(newName) {
// 			this.names.push(newName);
// 		},
// 	};
// }

// createUser("Amir");
// user.userName; // Amir
// user.userName = "Betty";
// user.names; // ["Amir", "Betty"]
// user.userName; // Betty
// user.userName = "Kelly";
// user.names; // ["Amir", "Betty", "Kelly"]
// user.userName; // Kelly
