//business logic 

//pizza object
function Pizza(size, crust, toppings, quantity, price) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.price = price;
}

//calculate total cost of ordered pizzas
Pizza.prototype.calculateTotalCost = function(){
    let unitPrice = parseInt(this.price.slice(4));
    let qtySelected = parseInt(this.quantity);
    return (unitPrice * qtySelected);
}


//UI logic 
$(document).ready(function () {
    // $("#crust").change (function() {
    //     if (this.checked) {
    //         $("#my-pizza-toppings").toggle();
    //         $("#crust").prop('checked', false);
    //     } else {
    //         $("#my-pizza-toppings").hide();
    //     }
    // });


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

    $(".table tbody").append('<tr><td class="ordersize">'+newPizza.size +'</td><td class="ordercrust">' + newPizza.crust + '</td><td class="ordertoppings">'+newPizza.toppings + '</td><td class="orderquantity">'+newPizza.quantity+'</td><td class="orderprice">'+newPizza.price+'</td></tr>');


    //populating the cart
    let table = $(".table tbody")
    let tableData = 
    `<tr>
        <td>${newPizza.size}</td>
        <td>${newPizza.crust}</td>
        <td>${newPizza.toppings}</td>
        <td>${newPizza.quantity}</td>
        <td>${newPizza.price}</td> 
    </tr>`

    table[0].innerHTML += tableData;
});

