// get first class tiket increase button 
document.getElementById('fclass-increase-btn').addEventListener('click', function () {
    // alert('clicked');
    var firstClassInputBtn = parseInt(document.getElementById('fclass-input-box').value);
    // console.log(typeof firstClassInputBtn);
    // new tiket value after incrase by 1 
    let ticketIncreasedValue = firstClassInputBtn + 1;
    // console.log(ticketIncreasedValue);
    let newTicketCount = document.getElementById('fclass-input-box').value = ticketIncreasedValue;
    // count total ticket price
    let ticketPrice = newTicketCount * 150;
    // console.log(ticketIncreasedValue, ticketPrice);
});

document.getElementById('fclass-decrease-btn').addEventListener('click', function () {
    // get input box value
    var firstClassInputBtn = parseInt(document.getElementById('fclass-input-box').value);
    // new ticket value after decrease by 1
    let ticketIncreasedValue = firstClassInputBtn - 1;
    let newTicketCount = document.getElementById('fclass-input-box').value = ticketIncreasedValue;
    // count total ticket price
    let ticketPrice = newTicketCount * 150;
    console.log(ticketIncreasedValue, ticketPrice);
})
// console.log(firstClassInputBtn);