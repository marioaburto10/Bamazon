# Bamazon
In this activity, I'll be creating an Amazon-like storefront with MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

### Challenge #1: Customer View (Minimum Requirement)
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
