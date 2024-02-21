document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const calculatorForm = document.getElementById('calculatorForm');

    calculatorForm.addEventListener('click', function (event) {
        const target = event.target;
        if (target.matches('input[type="button"]')) {
            const buttonValue = target.getAttribute('data-value');
            handleButtonClick(buttonValue);
        }
    });

    function handleButtonClick(value) {
        switch (value) {
            case '=':
                display.value = eval(display.value);
                break;
            case 'backspace':
                display.value = display.value.slice(0, -1);
                break;
            case 'clear':
                display.value = '';
                break;
            case '%':
                display.value = eval(display.value) / 100;
                break;
            default:
                display.value += value;
        }
    }
});
