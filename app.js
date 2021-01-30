// handle product change function for each product

function handleProductChange(product, isIncrease) {
    // get input value
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;

    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;

    let fclassTotal;
    if (product == 'firstclass') {
        fclassTotal = productNewCount * 150
    }
    if (product == 'echoclass') {
        fclassTotal = productNewCount * 100
    }

    totalPrice()
}



// calculate total Price

function totalPrice() {

    var firstclassCount = document.getElementById('firstclass-count');
    var firstClassInput = parseInt(firstclassCount.value);

    var economoyTicketCount = document.getElementById('echoclass-count');
    var economyInput = parseInt(economoyTicketCount.value);

    var totalPrice = firstClassInput * 150 + economyInput * 100;

    document.getElementById('sub-total').innerText = totalPrice;

    // calculate vat
    let vat = parseInt(document.getElementById('vat').innerText);
    let totalVat = totalPrice * 0.1;
    document.getElementById('vat').innerText = totalVat;

    // print grand total to view page

    document.getElementById('total-price').innerText = totalPrice + totalVat;
}

// submit booking

function bookNow() {
    var totalFirstClassTicket = parseInt(document.getElementById('firstclass-count').value);
    var totalEconomoTicket = parseInt(document.getElementById('echoclass-count').value);
    let totalTicket = totalFirstClassTicket + totalEconomoTicket;
    var totalPrice = parseInt(document.getElementById('total-price').innerText);
    if (totalPrice > 0) {
        alert(`congrats, you have booked ${totalFirstClassTicket} First Class ticket and ${totalEconomoTicket} Economoy Class ticket and total price is $${totalPrice}`)
    } else {
        alert('Sorry!! You did not selected any ticket yet');
    }
}

