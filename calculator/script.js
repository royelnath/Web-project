let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";
let isFinished = false; // Naya flag: Track karega ki calculation puri hui ya nahi

Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {
        let btnText = e.target.innerHTML;
        const operators = ['+', '-', '*', '/', '%'];

        // 1. CLEAR ALL (AC)
        if (btnText == "AC") {
            string = "";
            input.value = "0";
            isFinished = false;
        }

        // 2. DELETE (del)
        else if (btnText == "del") {
            if (input.value === "Error" || isFinished) {
                string = "";
                input.value = "0";
            } else {
                string = string.toString().slice(0, -1);
                input.value = string || "0";
            }
            isFinished = false;
        }

        // 3. EQUAL TO (=)
        else if (btnText == "=") {
            try {
                if (string !== "") {
                    // Agar aakhri character operator hai, toh use hata dein
                    if (operators.includes(string.toString().slice(-1))) {
                        string = string.slice(0, -1);
                    }
                    
                    // Calculation logic
                    let result = eval(string);
                    
                    // Check for division by zero
                    if (!isFinite(result)) {
                        input.value = "Error";
                        string = "";
                    } else {
                        string = result.toString();
                        input.value = string;
                        isFinished = true; // Mark as finished
                    }
                }
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        }

        // 4. NUMBERS AND OPERATORS
        else {
            // Bug Fix: "=" ke baad naya number dabane par screen clear ho jaye
            if (isFinished && !operators.includes(btnText)) {
                string = btnText;
                isFinished = false;
            } 
            // Agar calculation ke baad operator dabayein toh result ke aage continue karein
            else if (isFinished && operators.includes(btnText)) {
                isFinished = false;
                string += btnText;
            }
            else {
                let lastChar = string.toString().slice(-1);

                // Double Operator Prevention
                if (operators.includes(btnText) && operators.includes(lastChar)) {
                    string = string.slice(0, -1) + btnText;
                }
                // Multiple Dots Prevention (Simple check)
                else if (btnText === "." && string.includes(".")) {
                    const lastNumber = string.split(/[\+\-\*\/\%]/).pop();
                    if (lastNumber.includes(".")) return;
                    else string += btnText;
                }
                else {
                    string += btnText;
                }
            }
            input.value = string;
        }
    });
});