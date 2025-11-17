document.getElementById('login-btn').addEventListener
('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber);
if (accountNumber.length === 11) {
    if (convertedPinNumber === 1234) {
        window.location.href="./main.html";
    } else {
        alert('pin number must be 1234');
    }
} else {
    alert('11 digit mobile number required');
}
});