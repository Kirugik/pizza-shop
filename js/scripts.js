//business logic 



//UI logic 
$(document).ready(function () {
    $(".form-check-input").change (function() {
        if (this.checked) {
            $(".pizza-toppings").toggle();
            $("#crust").prop('checked', false);
        } else {
            $(".pizza-toppings").hide();
        }
    });
});