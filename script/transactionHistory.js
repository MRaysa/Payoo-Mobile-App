document.getElementById("transactions-box").addEventListener("click",
    function(event){
        event.preventDefault();
        handleToggle("addmoney","none");
        handleToggle("cashout","none");
        handleToggle("TransactionHistory","block");

    }
)