function fetch() {
	var monthsRange = document.getElementById("monthsRange").value;
	document.getElementById("months").value = monthsRange;

	var amountRange = document.getElementById("amountRange").value;
	document.getElementById("amount").value = amountRange;

	var interestRage = document.getElementById("interestRage").value;
	document.getElementById("interest_rate").value = interestRage;


	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
    var paymentCommon = parseInt(amount) + parseInt(payment);
	var discount = ((amount/months) / interest_rate).toFixed(2);

	// payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Aylıq ödəniş    <br>"+payment + " AZN";

    document.getElementById('paymentCom').innerHTML = "Ümumi məbləğ    <br>"+ paymentCommon + " AZN";

	document.getElementById('discount').innerHTML = "Faiz məbləği    <br>"+ discount + " AZN";
}

// function computeLoan(){
// 	var amount = document.getElementById('amount').value;
// 	var interest_rate = document.getElementById('interest_rate').value;
// 	var months = document.getElementById('months').value;
// 	var interest = (amount * (interest_rate * .01)) / months;
// 	var payment = ((amount / months) + interest).toFixed(2);
//     var paymentCommon = parseInt(amount) + parseInt(payment);
// 	var discount = ((amount/months) / interest_rate).toFixed(2);

// 	// payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// 	document.getElementById('payment').innerHTML = "Aylıq ödəniş    <br>"+payment + " AZN";

//     document.getElementById('paymentCom').innerHTML = "Ümumi məbləğ    <br>"+ paymentCommon + " AZN";

// 	document.getElementById('discount').innerHTML = "Faiz məbləği    <br>"+ discount + " AZN";


// }


