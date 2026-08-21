let count = 0;

function tryCounting() {
    const successChance = 1 / Math.pow(2, count + 1);

    if (Math.random() < successChance) {
        count++;
        document.getElementById("counter").textContent = count;
    } else {
        count = 0;
        document.getElementById("counter").textContent = count;
    }
}