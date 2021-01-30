//  testing code 

function updatePrice(isIncrease) {

    var firstClassInputBtn = parseInt(document.getElementById('firstclass-count').value);

    let ticketIncreasedValue;

    if (isIncrease == true) {
        ticketIncreasedValue = firstClassInputBtn + 1;
    }
    if (isIncrease == false) {
        if (firstClassInputBtn <= 0) {
            document.getElementById('firstclass-count').value = 0;
            ticketIncreasedValue = 0;
        } else {

            ticketIncreasedValue = firstClassInputBtn - 1;
        }
    }
    let newTicketCount = document.getElementById('firstclass-count').value = ticketIncreasedValue;

    let ticketPrice = newTicketCount * 150;

    totalPrice()
}







// Working code 

function updatePrice(isIncrease) {

    var firstClassInputBtn = parseInt(document.getElementById('firstclass-count').value);

    let ticketIncreasedValue;

    if (isIncrease == true) {
        ticketIncreasedValue = firstClassInputBtn + 1;
    }
    if (isIncrease == false) {
        if (firstClassInputBtn <= 0) {
            document.getElementById('firstclass-count').value = 0;
            ticketIncreasedValue = 0;
        } else {

            ticketIncreasedValue = firstClassInputBtn - 1;
        }
    }
    let newTicketCount = document.getElementById('firstclass-count').value = ticketIncreasedValue;

    let ticketPrice = newTicketCount * 150;

    totalPrice()
}



function updateEconomyPrice(isIncrease) {

    var ecoClassInput = parseInt(document.getElementById('echoClass-count').value)

    let ticketIncresedInput = 0;

    if (isIncrease == true) {
        ticketIncresedInput = ecoClassInput + 1;
    }
    if (isIncrease == false) {
        if (ecoClassInput <= 0) {
            document.getElementById('echoClass-count').value = 0;
            ticketIncresedInput = 0;
        } else {
            ticketIncresedInput = ecoClassInput - 1;
        }
    }

    let newTicketCount = document.getElementById('echoClass-count').value = ticketIncresedInput;

    let ticketIncreasedValue = newTicketCount * 100;

    totalPrice()
}

// calculate total Price

function totalPrice() {

    var firstclassCount = document.getElementById('firstclass-count');
    var firstClassInput = parseInt(firstclassCount.value);

    var economoyTicketCount = document.getElementById('echoClass-count');
    var economyInput = parseInt(economoyTicketCount.value);
    firstClassInput + economyInput;
    var totalPrice = firstClassInput * 150 + economyInput * 100;

    document.getElementById('sub-total').innerText = totalPrice;

    // calculate vat 
    let vat = parseInt(document.getElementById('vat').innerText);
    let totalVat = totalPrice * 0.1;
    document.getElementById('vat').innerText = totalVat

    // grand total 

    document.getElementById('total-price').innerText = totalPrice + totalVat;
}

// submit booking

function bookNow() {
    var totalPrice = parseInt(document.getElementById('total-price').innerText);
    if (totalPrice > 0) {
        alert('congrats! your Ticket booked')
    } else {
        alert('Sorry!! You did not selected any ticket yet');
    }
}

