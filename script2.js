document.addEventListener("DOMContentLoaded", function() {

    let attempts = 3;

    document.querySelector("form").addEventListener("submit", function() {

        if (attempts > 0) {

            let answer = document.querySelector("#answer");
            attempts--;

            if (answer.value == "Z590" || answer.value == "z590") {
                answer.style.backgroundColor = "green";
                document.querySelector("#feedback2").innerHTML = "Correct!";
                document.querySelector("#hint").innerHTML = "";
                attempts = 0;
            }
            else {
                answer.style.backgroundColor = "red";
                document.querySelector("#hint").innerHTML = 'Hint: the most recent chipsets are 500-series meaning the answer will be "_5__".';
                
                if (attempts == 1) {
                    document.querySelector("#feedback2").innerHTML = "Incorrect, 1 attempt remaining.";
                }
                else if (attempts == 0) {
                    document.querySelector("#feedback2").innerHTML = "Incorrect.";
                }
                else {
                    document.querySelector("#feedback2").innerHTML = `Incorrect, ${attempts} attempts remaining.`;
                }
            }
        }

    });
});