let countdownInterval;

document.getElementById("startBtn").addEventListener("click", function() {
    const eventTime = document.getElementById("event-time").value;
    if (!eventTime) {
        alert("Please select a date and time!");
        return;
    }

    const targetDate = new Date(eventTime).getTime();

    clearInterval(countdownInterval);

    countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<h2>Time's Up!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }, 1000);
});

document.getElementById("resetBtn").addEventListener("click", function() {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    document.getElementById("event-time").value = "";
});
