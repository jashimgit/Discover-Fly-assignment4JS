// get first class tiket increase button 
document.getElementById('fclass-increase-btn').addEventListener('click', function () {
    updatePrice(true)
});

document.getElementById('fclass-decrease-btn').addEventListener('click', function () {
    updatePrice(false)
})

function updatePrice(isIncrease) {

    var firstClassInputBtn = parseInt(document.getElementById('fclass-input-box').value);
    // console.log(typeof firstClassInputBtn);
    // new tiket value after incrase by 1 
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


// economy class plus button
document.getElementById('eco-class-plus-btn').addEventListener('click', function () {
    // get input box value
    var ecoClassInput = parseInt(document.getElementById('echo-class-input').value)
    // new ticket value after increase by 1
    ticketIncresedValue = ecoClassInput + 1;

    let newTicketCount = document.getElementById('echo-class-input').value = ticketIncresedValue;
    // count total ticket price
    let ticketAfterDscValue = newTicketCount * 100;
    // console.log(ticketDcresedValue, ticketAfterDscValue);
})

document.getElementById('eco-class-minus-btn').addEventListener('click', function () {
    // get input box value
    var echoClassInput = document.getElementById('echo-class-input').value;
    // new ticket value after decrease by 1 
    let ticketDcresedValue = echoClassInput - 1;
    let newTicketCount = document.getElementById('echo-class-input').value = ticketDcresedValue;
    // count total ticket price
    let newTicketValue = newTicketCount * 100;
})

// calculate grand total 

