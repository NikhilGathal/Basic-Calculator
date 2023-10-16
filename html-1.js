function appendToDisplay(value) {
    document.getElementById('display').value = document.getElementById('display').value + value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const expression = document.getElementById('display').value;
    var e = eval(expression)
    document.getElementById('display').value = e;

}