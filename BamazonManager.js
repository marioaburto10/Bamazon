var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "bamazon"
})

connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
})


connection.query('SELECT * FROM Products', function(err, res){

  inquirer.prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
  }).then(function(answer){
    switch(answer.action) {
      case 'View Products for Sale':
        displayProducts();
        break;

      case 'View Low Inventory':
        displayLowInventory();
        break;
      }
  })


  var displayProducts = function(){

    console.log("----------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].ID + " | " + res[i].ProductName + " | " + "$" + res[i].Price + " | " + res[i].StockQuantity + " | ");
    }
    console.log("----------------------------");
  }

  var displayLowInventory = function (){
    console.log("ewrfaewfca");
  }

});


