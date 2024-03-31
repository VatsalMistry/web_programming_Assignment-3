function $(selector) {
    return document.querySelector(selector);
}

function processEntries() {
    var subtotal = parseFloat($("#subtotal").value);
    var taxRate = parseFloat($("#taxRate").value);

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        return;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        return;
    }

    var salesTax = subtotal * (taxRate / 100);
    var total = subtotal + salesTax;

    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    $("#calculateBtn").addEventListener("click", processEntries);
    $("#clearBtn").addEventListener("click", clearFields);

    $("#subtotal").addEventListener("click", clearField);
    $("#taxRate").addEventListener("click", clearField);

    $("#subtotal").focus();
});

function clearFields() {
    $("#subtotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";

    $("#subtotal").focus();
}

function clearField(event) {
    event.target.value = "";
}