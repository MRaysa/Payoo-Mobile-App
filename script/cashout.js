document.getElementById("cashout-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const pin = document.getElementById('cashout-pin').value;
        const convertedPin = parseInt(pin);
        const ammount = document.getElementById("cashout-amount").value;
        const convertedAmount = parseFloat(ammount);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainValance = parseFloat(mainBalance);
        if (convertedPin === 1234){
            const sum = convertedMainValance - convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        else{
            alert("Enter valid pin.")
        }
    }
)