# Bamazon
In this activity, I'll be creating an Amazon-like storefront with MySQL. The app will take in orders from customers and deplete stock from the store's inventory as well as let managers view and update their stock.

### #1: Customer View
Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

The app will prompt users with two messages.
  * The first message will ask them the ID of the product they would like to buy.
  * The second message will ask how many units of the product they would like to buy.

![Image of table and prompt](/images/displayProducts1.png)

Once the customer has placed the order, this application will check if your store has enough of the product to meet the customer's request.
  * If not, the app will log a phrase like `Sorry, there is not enough units in stock!`, and then prevent the order from going through.

8. However, if my store *does* have enough of the product, it will fulfill the customer's order.
  * This will update the SQL database to reflect the remaining quantity.
  * Once the update goes through, it will show the customer the total cost of their purchase.

  ![Image of not enough and total](/images/total2.png)

### #2: Manager View

* Created a new Node application called `BamazonManager.js`. Running this application will:

  * Menu options include:
    * View Products for Sale
    * View Low Inventory
    * Add to Inventory
    * Add New Product

  * If a manager selects `View Products for Sale`, the app will list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it will list all items with a inventory count lower than five.

  ![Image of low inventory](/images/lowInventory3.png)


  * If a manager selects `Add to Inventory`, it will display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it will allow the manager to add a completely new product to the store.

![Image of add product](/images/addProduct4.png)