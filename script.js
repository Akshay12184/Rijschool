$(document).ready(function(){
    $('#CalendarInput').datepicker({
    format: 'mm/dd/yyyy',
    todayHighlight: true,
    autoclose: true,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('plan-intake');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const nameInput = document.getElementById('NaamInput');
    const locationInput = document.getElementById('WoonplaatsInput');

    button.addEventListener('click', function() {
        const name = nameInput.value;
        const location = locationInput.value;

        if (name && location) {
            popupText.innerText = `${name} has signed up for an intake from ${location}`;

            popup.classList.add('show');

            setTimeout(function() {
                popup.classList.remove('show');
            }, 5000);
        } else {
            alert("Please enter both your name and location.");
        }
    });
});