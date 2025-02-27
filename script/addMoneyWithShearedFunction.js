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
        
        const selectedBank = document.getElementById("allbank").value;
        // console.log(selectedBank);

        // add validation
        if (amount<0) {
            alert("Please give me positive number ! ")
            return;
          }



        if (account.toString().length === 11){
            alert("Added Successfully done")
            if(pin === 1234){
                const sum = mainBalance + amount;
                setInnerTextByIDandValue("main-balance",sum);
            
                // start for dynamical transaction
                const container = document.getElementById("transection-container");

                const div = document.createElement("div");
                div.classList.add("bg-red-400")
                div.innerHTML = `
                <h1 class="text-yellow-300">ADDed Money form ${selectedBank}</h1>
                <h3>${amount}</h3> 
                <p>account number: ${account}</p>

                 `
                container.appendChild(div)

           
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