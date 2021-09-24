document.addEventListener("DOMContentLoaded", function() {

    let attempts1 = 3;
    let attempts2 = 3;

    document.querySelector("#form1").addEventListener("submit", function() {

        if (attempts1 > 0) {

            let answer = document.querySelector("#answer1");
            attempts1--;

            if (answer.value == "Z590" || answer.value == "z590") {
                answer.style.backgroundColor = "green";
                document.querySelector("#feedback2").innerHTML = "Correct!";
                document.querySelector("#hint1").innerHTML = "";
                attempts1 = 0;
            }
            else {
                answer.style.backgroundColor = "red";
                document.querySelector("#hint1").innerHTML = 'Hint: the most recent chipsets are 500-series meaning the answer will be "_5__".';
                
                if (attempts1 == 1) {
                    document.querySelector("#feedback2").innerHTML = "Incorrect, 1 attempt remaining.";
                }
                else if (attempts1 == 0) {
                    document.querySelector("#feedback2").innerHTML = "Incorrect.";
                }
                else {
                    document.querySelector("#feedback2").innerHTML = `Incorrect, ${attempts1} attempts remaining.`;
                }
            }
        }

    });

    document.querySelector("#form2").addEventListener("submit", function() {

        if (attempts2 > 0) {

            let answer = document.querySelector("#answer2");
            attempts2--;

            if (answer.value == "Javascript" || answer.value == "JavaScript" || answer.value == "javascript") {
                answer.style.backgroundColor = "green";
                document.querySelector("#feedback7").innerHTML = "Correct!";
                document.querySelector("#hint2").innerHTML = "";
                attempts2 = 0;
            }
            else {
                answer.style.backgroundColor = "red";
                document.querySelector("#hint2").innerHTML = 'Hint: we can code in this language in any HTML file using the "script" tag.';
                
                if (attempts2 == 1) {
                    document.querySelector("#feedback7").innerHTML = "Incorrect, 1 attempt remaining.";
                }
                else if (attempts2 == 0) {
                    document.querySelector("#feedback7").innerHTML = "Incorrect.";
                }
                else {
                    document.querySelector("#feedback7").innerHTML = `Incorrect, ${attempts2} attempts remaining.`;
                }
            }

        }

    });

});