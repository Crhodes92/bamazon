var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazondb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    console.log("===============================================================");
    console.log("WELCOME TO BAMAZON");
    console.log("===============================================================");
    console.log("Check out our deals of the day");
    onStart();
});

function onStart() {

    //Query the database to see all the products up for purchase
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("\n" + "\n");
        console.log("___________________________________________________________" + "\n");
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id);
            console.log(res[i].product_name);
            console.log("$" + res[i].price + "\n");
        }
        console.log("___________________________________________________________");

        decisionTime()

    })

}

function decisionTime() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "list",
                    choices: function () {
                        var choiceArray = []
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "Select the Item ID of the product you'd like to purchase"
                },
                {
                name: "howMany",
                type: "input",
                message: "How many would you like to purchase?"
                }
            ])
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].product_name === answer.choice) {
                        chosenItem = res[i];
                        
                    }
                }
                if (chosenItem.stock_quantity < answer.howMany) {
                    console.log("I'm sorry but we're fresh out!, try something else" + "\n");
                    decisionTime();
                }
                else {
                    console.log(chosenItem.stock_quantity)
                    price = (answer.howMany*chosenItem.price).toFixed(2)
                    console.log("Your total cost is: $" + price)
                    console.log("Congratulations on your purchase!")
                    chosenItem.stock_quantity = chosenItem.stock_quantity - answer.howMany;
                    console.log(chosenItem.stock_quantity);
                    connection.query("UPDATE products SET ? WHERE ?", 
                    [
                        {
                          stock_quantity: chosenItem.stock_quantity
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ])
                }
                connection.end();
            })
    })
}
