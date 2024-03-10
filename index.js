// Digital clock implementation
function updateDigitalClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Convert hours to 12-hour format and determine AM or PM
    var amPm = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zero for minutes if less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Format time as HH : MM : SS
    var time = hours + ' : ' + minutes + ' : ' + seconds;

    // Update digital clock display
    document.getElementById('digitalClock').innerText = time;
    document.getElementById('ampm').innerText = amPm;  
}

// Analog clock implementation
function updateAnalogClock() {
    var now = new Date();
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();

    // Get clock hands
    var secondHand = document.getElementById('secondHand');
    var minuteHand = document.getElementById('minuteHand');
    var hourHand = document.getElementById('hourHand');

    // Rotate hands according to current time
    secondHand.style.transform = 'rotate(' + second * 6 + 'deg)';
    minuteHand.style.transform = 'rotate(' + minute * 6 + 'deg)';
    hourHand.style.transform = 'rotate(' + (hour % 12 * 30 + minute * 0.5) + 'deg)';
}

// Update clocks every second
setInterval(function() {
    updateDigitalClock();
    updateAnalogClock();
}, 1000);