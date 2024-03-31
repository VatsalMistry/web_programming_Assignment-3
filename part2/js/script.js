function $(selector) {
    return document.querySelector(selector);
}

function processEntry() {
    var amount = parseInt($("#amount").value);

    if (isNaN(amount) || amount < 0 || amount > 99) {
        alert("Please enter a number between 0 and 99.");
        return;
    }

    makeChange(amount);
}

function makeChange(amount) {
    var quarters = Math.floor(amount / 25);
    amount %= 25;
    var dimes = Math.floor(amount / 10);
    amount %= 10;
    var nickels = Math.floor(amount / 5);
    var pennies = amount % 5;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
}

document.addEventListener("DOMContentLoaded", function () {
    $("#makeChangeBtn").addEventListener("click", processEntry);
});
