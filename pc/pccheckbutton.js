let counters = [];

for (let i = 0; i < 50; i++) {
    counters.push(0);
}

function checkOption(button,answer,question) {
    if (counters[question - 1] < 1) {
        if (answer == "correct") {
            button.style.backgroundColor = "green";
            document.querySelector(`#feedback${question}`).innerHTML = "Correct!";
            answered++;
            score++;
        }
        else {
            button.style.backgroundColor = "red";
            document.querySelector(`#feedback${question}`).innerHTML = "Incorrect.";
            answered++;
        }
        
        counters[question - 1] = 1;

        if (answered == 10) {
            document.querySelector("#score").innerHTML = `Score: ${score}/10`;
        }
    }
};