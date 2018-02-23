const Table = require('cli-table');


class View {
    static handler_contact(data){
        if(typeof data == 'string'){
            View.show_notification(data);
        }
        else{
            View.show_table_contact(data);
        }
    }

    static handler_address(data){
        if(typeof data == 'string'){
            View.show_notification(data);
        }
        else{
            View.show_table_address(data);
        }
    }

    static show_table_contact(data){
        let header = new Array();
        if(data.length == undefined){
            header = Object.keys(data);
            var table = new Table({
                head:header,
                colWidths: [5,20,30,20,30,30]
            });
            let tempArr = new Array();
            for (let i in data){
                tempArr.push(data[i]);
            }
            table.push(tempArr);
        }
        else{
            header = Object.keys(data[0]);
            var table = new Table({
                head: header,
                colWidths: [5,20,30,20,30,30]
            });
            for (let j = 0; j < data.length; j++){
                let tempArr = new Array();
                for(let i in data[j]){
                    tempArr.push(data[j][i]);
                }
                table.push(tempArr);
            }
        }
        console.log(table.toString());
    }

    static show_table_address(data){
        let header = new Array();
        if(data.length == undefined){
            header = Object.keys(data);
            var table = new Table({
                head:header,
                colWidths: [5,20,20,10,30,30,10]
            });
            let tempArr = new Array();
            for (let i in data){
                tempArr.push(data[i]);
            }
            table.push(tempArr);
        }
        else{
            header = Object.keys(data[0]);
            var table = new Table({
                head: header,
                colWidths: [5,30,20,10,30,30,15]
            });
            for (let j = 0; j < data.length; j++){
                let tempArr = new Array();
                for(let i in data[j]){
                    tempArr.push(data[j][i]);
                }
                table.push(tempArr);
            }
        }
        console.log(table.toString());
    }

    static show_notification(str){
        console.log(str);
    }

    static show_error(err){
        console.log(`[ERROR] ${err}`);
    }
}

module.exports = View;
