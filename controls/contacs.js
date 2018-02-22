'use strict';

class Contacts {
	static main(commands, options) {
		let table = commands.split(':')[0];
		let command = commands.split(':')[1];
		switch (command) {
			case "list":
				Contacts.list(table, rows => console.log(rows));
				break;
			default:
				// statements_def
				break;
		}

		// console.log(table, command);
	}

	static list (table, callback) {
		Model[table].findAll({raw:true})
		.then(rows => callback(rows));
	}

	// static create (dbName, data, callback) {
	// 	Model[dbName].create(data, { plain: true })
	// 	.then(result => callback(result));
	// }
}

module.exports = Contacts;