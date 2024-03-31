function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", function () {
    $("#calculateBtn").addEventListener("click", processEntry);
    $("#income").focus();
});

function processEntry() {
    var income = parseFloat($("#income").value);

    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid number greater than zero for income.");
        $("#income").focus();
        return;
    }

    var tax = calculateTax(income);
    $("#tax").value = tax.toFixed(2);
    $("#income").focus();
}

function calculateTax(income) {
    if (income <= 9875) {
        return income * 0.1;
    } else if (income <= 40125) {
        return 987.5 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        return 4617.5 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
        return 14605.5 + (income - 85525) * 0.24;
    } else if (income <= 207350) {
        return 33271.5 + (income - 163300) * 0.32;
    } else if (income <= 518400) {
        return 47367.5 + (income - 207350) * 0.35;
    } else {
        return 156235 + (income - 518400) * 0.37;
    }
}
