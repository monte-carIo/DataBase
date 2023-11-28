function calculateTotalCostOnInput() {
    var numPagesInput = document.getElementById('numPages');
    var totalCostInput = document.getElementById('totalCost');

    numPagesInput.addEventListener('input', function() {
        var numPages = parseFloat(numPagesInput.value);
        var costPerPage = 0.10; // You can adjust this value based on your pricing model

        // Validate input
        if (!isNaN(numPages) && numPages >= 0) {
            // Calculate total cost
            var totalCost = numPages * costPerPage;

            // Display the result in the totalCost input field with a dollar sign
            totalCostInput.value = '$' + totalCost.toFixed(2);
        } else if(numPages < 0){
            // Display an error message or handle invalid input
            totalCostInput.value = ''; // Clear the totalCost input field for negative values
            alert('Number of pages should be a non-negative number.');
        }
    });
}

function placeOrder() {
    var numPages = parseFloat(document.getElementById('numPages').value);
    var totalCost = document.getElementById('totalCost').value;
    var dateToBuy = document.getElementById('dateToBuy').value;
    console.log(typeof(dateToBuy));
    
    // // Check if the number of pages is a valid positive number
    // if (isNaN(numPages) || numPages < 0) {
    //     alert('Please enter a valid number of pages.');
    //     location.reload();
    //     return;
    // }

    // // Check if the date is filled
    // else if (dateToBuy != "") {
    //     alert('Please enter the date to buy.');
    //     location.reload();
    //     return;
    // }

    // else {
    //     alert('Buy pages successfull!');
    //     location.reload();
    //     return;
    // }
}