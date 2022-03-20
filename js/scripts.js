//business logic 

//pizza object
function Pizza (size, crust, toppings, quantity, price) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.price = price;
}

Pizza.prototype.calculateTotalCost = function (){
    let unitPrice = parseInt(this.price.slice(4));
    let qntySelected = parseInt(this.quantity);
    return (unitPrice * qntySelected);
}



//UI logic 
$(document).ready(function () {
    $("#crust").change (function() {
        if (this.checked) {
            $("#my-pizza-toppings").toggle();
            $("#crust").prop('checked', false);
        } else {
            $("#my-pizza-toppings").hide();
        }
    });



    $("#cartBtn").click (function (event) {
        event.preventDefault();

        let size = $(this).closest('.card').find('h3.card-title').text();
        let crust = $(this).closest('.card').find('.size-crust-toppings select[name = crust-types]').val();
        let toppings = $(this).closest('.card').find('.size-crust-toppings select[name = toppings-types]').val();
        let quantity = $(this).closest('.card').find('form input[name = quantity]').val(); 
        let price = $(this).closest('.card').find('h5.size-price').text();
    })

    let newOrder = new Pizza (size, crust, toppings, quantity, price);

    let table = $("table tbody")
    
    let tableData=`
      <tr>
        <td>${newOrder.size}</td>
        <td>${newOrder.crust}</td>
        <td>${newOrder.toppings}</td>
        <td>${newOrder.quantity}</td>
        <td>${newOrder.price}</td> 
    </tr>`
    table[0].innerHTML+=tableData;
});