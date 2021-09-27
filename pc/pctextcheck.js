let score = 0;
let answered = 0;

document.addEventListener("DOMContentLoaded", function() {

    let attempts1 = 3;
    let attempts2 = 3;

    document.addEventListener("submit", function(event) {

        if (event.target.id == "form1") {
            if (attempts1 > 0) {

                let answer = document.querySelector("#answer1");
                attempts1--;
    
                if (answer.value == "Z590" || answer.value == "z590") {
                    answer.style.backgroundColor = "green";
                    document.querySelector("#feedback2").innerHTML = "Correct!";
                    document.querySelector("#hint1").innerHTML = "";
                    attempts1 = 0;
                    answered++;
                    score++;
                }
                else {
                    answer.style.backgroundColor = "red";
                    document.querySelector("#hint1").innerHTML = 'Hint: the most recent chipsets are 500-series meaning the answer will be "_5__".';
                    
                    if (attempts1 == 1) {
                        document.querySelector("#feedback2").innerHTML = "Incorrect, 1 attempt remaining.";
                    }
                    else if (attempts1 == 0) {
                        document.querySelector("#feedback2").innerHTML = "Incorrect.";
                        answered++;
                    }
                    else {
                        document.querySelector("#feedback2").innerHTML = `Incorrect, ${attempts1} attempts remaining.`;
                    }
                }
                if (answered == 10) {
                    document.querySelector("#score").innerHTML = `Score: ${score}/10`;
                }
            }
        }
        else if (event.target.id == "form2") {
            if (attempts2 > 0) {

                let answer = document.querySelector("#answer2");
                attempts2--;
    
                if (answer.value == "Javascript" || answer.value == "JavaScript" || answer.value == "javascript") {
                    answer.style.backgroundColor = "green";
                    document.querySelector("#feedback7").innerHTML = "Correct!";
                    document.querySelector("#hint2").innerHTML = "";
                    attempts2 = 0;
                    answered++;
                    score++;
                }
                else {
                    answer.style.backgroundColor = "red";
                    document.querySelector("#hint2").innerHTML = 'Hint: we can code in this language in any HTML file using the "script" tag.';
                    
                    if (attempts2 == 1) {
                        document.querySelector("#feedback7").innerHTML = "Incorrect, 1 attempt remaining.";
                    }
                    else if (attempts2 == 0) {
                        document.querySelector("#feedback7").innerHTML = "Incorrect.";
                        answered++;
                    }
                    else {
                        document.querySelector("#feedback7").innerHTML = `Incorrect, ${attempts2} attempts remaining.`;
                    }
                }
                if (answered == 10) {
                    document.querySelector("#score").innerHTML = `Score: ${score}/10`;
                }
            }
    
        }
    });
});