var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
    var start = new Date(2022, 1, 15, 0, 0); // Start date: February 15, 2022
    var end = new Date(2024, 11, 15, 0, 0); // End date: December 15, 2024
    var t = new Date() - start; // Time difference from the start date to now
    var d = Math.floor(t / 1000 / 60 / 60 / 24); // Days together
    var h = Math.floor(t / 1000 / 60 / 60 % 24); // Hours together
    if (h < 10) {
        h = "0" + h;
    }
    var m = Math.floor(t / 1000 / 60 % 60); // Minutes together
    if (m < 10) {
        m = "0" + m;
    }
    var s = Math.floor(t / 1000 % 60); // Seconds together
    if (s < 10) {
        s = "0" + s;
    }

    // Display values in corresponding HTML elements
    document.getElementById("d").innerHTML = d + " Days";
    document.getElementById("h").innerHTML = h + " Hours";
    document.getElementById("m").innerHTML = m + " Minutes";
    document.getElementById("s").innerHTML = s + " Seconds";

    // If you've reached the end date
    if (new Date() >= end) {
        document.getElementById("message").innerHTML = "Together for the entire duration!";
    }
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function () {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
