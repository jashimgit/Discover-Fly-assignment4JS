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
    // console.log(ticketIncreasedValue);
    let newTicketCount = document.getElementById('firstclass-count').value = ticketIncreasedValue;
    // count total ticket price
    let ticketPrice = newTicketCount * 150;
    // console.log(ticketIncreasedValue, ticketPrice);
    totalPrice()
}



function updateEconomyPrice(isIncrease) {
    // get input box value
    var ecoClassInput = parseInt(document.getElementById('echo-class-input').value)

    let ticketIncresedInput = 0;

    if (isIncrease == true) {
        ticketIncresedInput = ecoClassInput + 1;
    }
    if (isIncrease == false) {
        if (ecoClassInput <= 0) {
            document.getElementById('echo-class-input').value = 0;
            ticketIncresedInput = 0;
        } else {
            ticketIncresedInput = ecoClassInput - 1;
        }
    }

    let newTicketCount = document.getElementById('echo-class-input').value = ticketIncresedInput;
    // count total ticket price
    let ticketIncreasedValue = newTicketCount * 100;
    // console.log(newTicketCount, ticketIncreasedValue);
    totalPrice()
}

// calculate total 

function totalPrice() {

    var firstclassCount = document.getElementById('firstclass-count');
    var firstClassInput = parseInt(firstclassCount.value);
    // economoy class ticket 
    var economoyTicketCount = document.getElementById('echo-class-input');
    var economyInput = parseInt(economoyTicketCount.value);
    firstClassInput + economyInput;
    var totalPrice = firstClassInput * 150 + economyInput * 100;
    // console.log(totalPrice);
    document.getElementById('sub-total').innerText = totalPrice;
}