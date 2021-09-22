let i1 = 0;
function checkOption(button,answer) {
    if (i1 < 1) {
        i1++;
        if (answer == "correct") {
            button.style.backgroundColor = "green";
            document.querySelector("#feedback1").innerHTML = "Correct!";
        }
        else {
            button.style.backgroundColor = "red";
            document.querySelector("#feedback1").innerHTML = "Incorrect.";
        }
    }
};