document.getElementById('add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        const ammount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(ammount);
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainValance = parseFloat(mainBalance);
        if (convertedPin === 1234){
            const sum = convertedAmount + convertedMainValance;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            console.log('Sorry pin is not correct')
        }
        
    
    }
)