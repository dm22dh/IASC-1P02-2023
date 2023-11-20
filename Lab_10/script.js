function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operation");
        return;
    }

    // Displaying the result
    document.getElementById('output').innerHTML = result;
}

window.addEventListener('load', function() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var operation = this.innerText;
            calculate(operation);
        });
    }
});
