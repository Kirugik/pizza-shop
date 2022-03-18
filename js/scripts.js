//business logic 



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
});