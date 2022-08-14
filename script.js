function incrementCounter() {
    var counter = document.getElementById('clicks');
    var timer = document.getElementById('timer');
    if(timer.innerHTML == "10") {
        countdownTimer();
    }
    if(timer.innerHTML == "0") {
        return;
    }
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}
function countdownTimer () {
    var counter = document.getElementById('timer');
    if (parseInt(counter.innerHTML) > 0) {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
        setTimeout(countdownTimer, 1000);
    }
}