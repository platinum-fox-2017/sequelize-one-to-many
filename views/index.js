const Table = require('cli-table');
const colors = require('colors');

class View {
	static ShowData(data) {
		console.log(data);
	}

	static ShowTable(command, rows) {
		let header = View.GetHeader(command, 'green');

		let table = new Table({ head: header });

		rows.forEach((row) => {
			table.push(View.GetRow(command, row));
		});

		// table.push(View.GetRow(command, rows));

		console.log(table.toString());
	}

	static ShowHelp() {
		console.log(`Command Salah`);
	}

	static ShowTableWithAddress(rows) {
		console.log(rows[0]['dataValues'].name);

		let header = View.GetHeader('Address', 'green');

		let table = new Table({ head: header });

		for (var i = 0; i < rows[0]['dataValues'].Addresses.length; i++) {
			table.push(View.GetRow('Address', rows[0]['dataValues'].Addresses[i]['dataValues']));
		}

		console.log(table.toString());
	}

	static GetHeader(command, color) {
		let header = [];
		switch (command) {
			case "Contact" : header = ['ID'[color], 'Name'[color], 'Email'[color], 'Phone'[color]]; break;
			case "Address" : header = ['ID'[color], 'Street'[color], 'City'[color], 'Zip Code'[color]]; break;
		}
		return header;
	}

	static GetRow(command, rowData) {
		let row = [];
		switch (command) {
			case "Contact" : row = [rowData.id, rowData.name, rowData.email, rowData.phone]; break;
			case "Address" : row = [rowData.id, rowData.street, rowData.city, rowData.zipCode]; break;
		}
		return row;
	}
}

module.exports = View;