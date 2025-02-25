document.getElementById('login-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const AccountNumber = document.getElementById('Account-number').value;
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);
        if(AccountNumber.length === 11){
            if (convertedPin === 1234){
                showAlert('✅ Login successful! Redirecting...', 'text-green-600', true);
               // window.location.href="./main.html"
            }
            else{
                showAlert('❌ Pin is not correct', 'text-red-600', false);
            }
        }
        else{
            showAlert('⚠️ Need a valid account number', 'text-yellow-600', false);
        }
    });

// Function to show the modal alert
function showAlert(message, colorClass, redirect) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const alertBtn = document.getElementById('alert-btn');

    alertMessage.textContent = message;
    alertMessage.className = `text-lg font-semibold ${colorClass}`;
    alertBox.classList.remove('hidden');

    // Smoothly scale in the alert
    setTimeout(() => {
        alertBox.firstElementChild.classList.remove('scale-90');
    }, 50);

    if (redirect) {
        alertBtn.classList.add('hidden'); // Hide button for auto-redirect
        setTimeout(() => {
            window.location.href = "./main.html"; // Redirect after 1.5 seconds
        }, 1500);
    } else {
        alertBtn.classList.remove('hidden');
    }
}

// Function to close the alert manually
function closeAlert() {
    const alertBox = document.getElementById('custom-alert');

    // Smooth scale-out animation
    alertBox.firstElementChild.classList.add('scale-90');

    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, 300);
}