document.getElementById("cashout").style.display = "none";

// for add money 

document.getElementById("add-money-box").addEventListener("click",
    function (){
        handleToggle("addmoney", "block");
        handleToggle("cashout","none");
    }
)

// for cash out

document.getElementById("cash-out-box").addEventListener("click",
    function (){
        handleToggle("cashout", "block");
        handleToggle("addmoney","none");
    }
)

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}