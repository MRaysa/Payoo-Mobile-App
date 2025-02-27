document.getElementById("cashout").style.display = "none";
document.getElementById("addmoney").style.display = "none";
document.getElementById("transferMoney").style.display = "none";
document.getElementById("getBonus").style.display = "none";
document.getElementById("payBill").style.display = "none";
document.getElementById("TransactionHistory").style.display = "none";

//  add money 

document.getElementById("add-money-box").addEventListener("click",
    function (){
        handleToggle("addmoney", "block");
        handleToggle("cashout","none");
        handleToggle("transferMoney","none");
        handleToggle("getBonus","none");
        handleToggle("payBill","none");
        handleToggle("TransactionHistory","none");
        handleToggle("LatestPayments","none");
    }
)

//  cash out

document.getElementById("cash-out-box").addEventListener("click",
    function (){
        handleToggle("cashout", "block");
        handleToggle("addmoney","none");
        handleToggle("transferMoney","none");
        handleToggle("getBonus","none");
        handleToggle("payBill","none");
        handleToggle("TransactionHistory","none");
        handleToggle("LatestPayments","none");
    }
)

// transfer money

document.getElementById("transfer-money-box").addEventListener("click",
    function (){
        handleToggle("cashout", "none");
        handleToggle("addmoney","none");
        handleToggle("transferMoney","block");
        handleToggle("getBonus","none");
        handleToggle("payBill","none");
        handleToggle("TransactionHistory","none");
        handleToggle("LatestPayments","none");
    }
)

// get bonus 

document.getElementById("get-bonus-box").addEventListener("click",
    function (){
        handleToggle("cashout", "none");
        handleToggle("addmoney","none");
        handleToggle("transferMoney","none");
        handleToggle("getBonus","block");
        handleToggle("payBill","none");
        handleToggle("TransactionHistory","none");
        handleToggle("LatestPayments","none");
    }
)

//pay-bill-box

document.getElementById("pay-bill-box").addEventListener("click",
    function (){
        handleToggle("cashout", "none");
        handleToggle("addmoney","none");
        handleToggle("transferMoney","none");
        handleToggle("getBonus","none");
        handleToggle("payBill","block");
        handleToggle("TransactionHistory","none");
        handleToggle("LatestPayments","none");
    }
)


// Transaction History 

document.getElementById("transactions-box").addEventListener("click",
    function (){
        handleToggle("cashout", "none");
        handleToggle("addmoney","none");
        handleToggle("transferMoney","none");
        handleToggle("getBonus","none");
        handleToggle("payBill","none");
        handleToggle("TransactionHistory","block");
        handleToggle("LatestPayments","none");
    }
)

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}