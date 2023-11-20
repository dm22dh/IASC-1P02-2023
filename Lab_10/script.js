function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input is a number
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    var result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        // Check for division by zero
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operation");
        return;
    }

    // Display the result
    document.getElementById('output').innerHTML = result;
}

// Attach event handlers to the buttons using a for loop
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            // Get the operation from the button's inner text
            var operation = this.innerText;
            calculate(operation);
        });
    }
});
