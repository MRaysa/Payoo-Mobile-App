document.getElementById("cashout-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const accountNUmber = document.getElementById("account-number-cashout").value;
        //console.log(accountNUmber);
        const ammount = getInputValueById("cashout-amount");
      //  console.log(ammount);
       const pinNumber = getInputValueById("cashout-pin");
       const mainBalance = getInnerTextByID("main-balance");
      

        // added validation 
        if (ammount>mainBalance) {
            alert("invalid amount");
            return;
        }
        
       
       if(accountNUmber.toString().length === 11){
           alert("Successfully withdraw")
           if(pinNumber === 1234){
                const diff = mainBalance - ammount;
                setInnerTextByIDandValue("main-balance", diff);

                // start for Transaction  part
                const container = document.getElementById("transection-container");

                const p = document.createElement("p");
                p.innerText = `
                cashout ${ammount} from this ${accountNUmber} account
                `
                container.appendChild(p);

            }
        }
        else{
            alert("Account number is not valid .")
        }

    }
)