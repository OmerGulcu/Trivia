let counters = [];

for (let i = 0; i < 10; i++) {
    counters.push(0);
}

function checkOption(button,answer,question) {
    if (counters[question - 1] < 1) {
        if (answer == "correct") {
            button.style.backgroundColor = "green";
            document.querySelector(`#feedback${question}`).innerHTML = "Correct!";
        }
        else {
            button.style.backgroundColor = "red";
            document.querySelector(`#feedback${question}`).innerHTML = "Incorrect.";
        }
        counters[question - 1] = 1;
    }
};