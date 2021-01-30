
function updatePrice(isIncrease) {

    var firstClassInputBtn = parseInt(document.getElementById('fclass-input-box').value);

    let ticketIncreasedValue = 0;

    if (isIncrease == true) {
        ticketIncreasedValue = firstClassInputBtn + 1;
    }
    if (isIncrease == false) {
        if (firstClassInputBtn <= 0) {
            document.getElementById('fclass-input-box').value = 0;
            ticketIncreasedValue = 0;
        } else {

            ticketIncreasedValue = firstClassInputBtn - 1;
        }
    }
    // console.log(ticketIncreasedValue);
    let newTicketCount = document.getElementById('fclass-input-box').value = ticketIncreasedValue;
    // count total ticket price
    let ticketPrice = newTicketCount * 150;
    console.log(ticketIncreasedValue, ticketPrice);
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
    console.log(newTicketCount, ticketIncreasedValue);
}


