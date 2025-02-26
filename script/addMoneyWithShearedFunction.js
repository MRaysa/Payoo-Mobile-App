 const addMoneyBTN = document.getElementById("add-money");
 addMoneyBTN.addEventListener("click",
     function(event){
        event.preventDefault();
        const amount = getInputValueById("amount");
        const pin = getInputValueById("pin");
        const account = getInputValueById("account-number");
        console.log(account);
        const mainBalance = getInnerTextByID("main-balance");
        console.log(typeof account);
        // const a = account.toString().length;
        // console.log(" from account",a);
       
        if (account.toString().length === 11){
            alert("Added Successfully done")
            if(pin === 1234){
                const sum = mainBalance + amount;
                setInnerTextByIDandValue("main-balance",sum);
            }
            else{
                alert("Your pin is incorrect");
            }

        }
        else{
            alert("Account number is not correct")
        }
    }

    
)