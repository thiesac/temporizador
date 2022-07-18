function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);

}

function iniciar() {
    var minutesUser = document.getElementById("tempo-input").value;
    var duration = 60 * minutesUser;
    var display = document.querySelector("#mostra-tempo");

    startTimer(duration, display);
}


