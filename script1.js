let i1 = 0;
let i3 = 0;

function checkOption(button,answer,question) {
    if (question == 1 && i1 < 1 || question == 3 && i3 < 1) {
        if (answer == "correct") {
            button.style.backgroundColor = "green";
            document.querySelector(`#feedback${question}`).innerHTML = "Correct!";
        }
        else {
            button.style.backgroundColor = "red";
            document.querySelector(`#feedback${question}`).innerHTML = "Incorrect.";
        }

        if (question == 1) {
            i1++;
        }
        else {
            i3++;
        }
    }
};