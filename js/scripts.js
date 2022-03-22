//business logic 

//pizza object
function Pizza(size, crust, toppings, quantity, price) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.price = price;
}

const shoppingCart = [];

//calculate total cost of ordered pizzas
Pizza.prototype.calculateTotalCost = function(){
    let unitPrice = parseInt(this.price.slice(4));
    let qtySelected = parseInt(this.quantity);
    return (unitPrice * qtySelected);
}


//UI logic 
$(document).ready(function () {
    //display cart on clicking 'add to cart' button 
    $(".btn-success").click (function () {
        $("#shoppingCart").show();
    });
    //collecting order details from the user
    $("#cartBtn").click (function (event) {
        event.preventDefault();

        let size = $(this).closest('.card').find('h3.card-title').text();
        let crust = $(this).closest('.card').find('.size-crust-toppings select[name = crust-types]').val();
        let toppings = $(this).closest('.card').find('.size-crust-toppings select[name = toppings-types]').val();
        let quantity = $(this).closest('.card').find('form input[name = quantity]').val(); 
        let price = $(this).closest('.card').find('h5.size-price').text();
    })

    let newPizza = new Pizza (size, crust, toppings, quantity, price);
    shoppingCart.push(newPizza);

    //populating the cart
    $(".table tbody").append('<tr><td class="ordersize">'+newPizza.size +'</td><td class="ordercrust">' + newPizza.crust + '</td><td class="ordertoppings">'+newPizza.toppings + '</td><td class="orderquantity">'+newPizza.quantity+'</td><td class="orderprice">'+newPizza.price+'</td></tr>') 
});

