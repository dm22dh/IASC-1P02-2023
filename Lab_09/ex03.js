function addNumbers() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);

  var total = num1 + num2;

  document.getElementById('output').textContent = total;
}
