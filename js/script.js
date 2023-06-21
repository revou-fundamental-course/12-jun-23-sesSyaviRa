function celsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    var formula = "(" + celsius + " * 9/5) + 32";
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("conversion-info").innerText = formula;
}

function fahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    var formula = "(" + fahrenheit + " - 32) * 5/9";
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("conversion-info").innerText = formula;
}

function convert() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value !== "") {
        celsiusToFahrenheit();
    } else if (fahrenheitInput.value !== "") {
        fahrenheitToCelsius();
    }
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("conversion-info").innerText = "";
}

function reverse() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    var celsiusValue = celsiusInput.value;
    var fahrenheitValue = fahrenheitInput.value;

    celsiusInput.value = "";
    fahrenheitInput.value = "";

    if (celsiusValue !== "") {
        var fahrenheit = parseFloat(celsiusValue) * 9 / 5 + 32;
        var formula = "(" + celsiusValue + " * 9/5) + 32";
        fahrenheitInput.value = fahrenheit.toFixed(2);
        document.getElementById("conversion-info").innerText = formula;
    } else if (fahrenheitValue !== "") {
        var celsius = (parseFloat(fahrenheitValue) - 32) * 5 / 9;
        var formula = "(" + fahrenheitValue + " - 32) * 5/9";
        celsiusInput.value = celsius.toFixed(2);
        document.getElementById("conversion-info").innerText =  formula;
    }
}
