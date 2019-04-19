var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon_DB',
});
//tests the connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    itemInventory();
});

// the display of products for sale

var itemInventory = function() {
  console.log("ID |  Product Name |  Department Name |  Price" )
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price);
        }
        // this concole is just for the looks :)
        console.log("*************************************************************");
        //Executes a function after waiting a specified number of milliseconds.
        setTimeout(itemPurchase, 2000);
    });

};



var itemPurchase = function() {
    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message: "What is the item ID of the product you would like to buy?"
    }, {
        name: "Quantity",
        type: "input",
        message: "How many would you like to buy?"
    }]).then(function(answer) {
        connection.query("SELECT * FROM products WHERE products.item_id = ?", [answer.item_id], function(err, res) {

            if (res[0].item_id == answer.item_id && res[0].stock_quantity >= parseInt(answer.Quantity)) {
                var TotalPrice = res[0].price * parseInt(answer.Quantity);
                console.log("Your purchase was successful.");
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: res[0].stock_quantity - parseInt(answer.Quantity)
                }, {
                    id: res[0].item_id
                }], function(err, res) {
                    setTimeout(itemInventory, 1100);

                    setTimeout(function(){console.log("Your total is: $" + TotalPrice)}, 2000);

                });

            // is the item isn't on stock it will console "Insufficient quantity!".
            } else if (res[0].item_id == answer.item_id && res[0].stock_quantity < parseInt(answer.Quantity)) {
                setTimeout(function(){console.log("Insufficient quantity!")}, 2000);
                itemInventory();
            }

        });

    });
};