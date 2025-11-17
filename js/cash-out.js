document.getElementById('cash-out-btn').addEventListener
('click', function(event){
    event.preventDefault();
const mainBalance = document.getElementById('main-balance').innerText;
const convertedMainBalance = parseFloat(mainBalance);
const addAmount = document.getElementById('cash-out-amount').value;
const convertedAddAmount = parseFloat(addAmount);
const accountNumber = document.getElementById('cash-out-account').value;
const pinNumber = document.getElementById('cash-out-pin').value;
const convertedPinNumber = parseInt(pinNumber);

if (accountNumber.length === 11) {
    if (addAmount <= 0 || addAmount === '') {
        alert('valid amount must be given. 0 & - amount not allowed');
    } else {
        if (convertedPinNumber === 1234) {
        const sum = convertedMainBalance - convertedAddAmount;
        document.getElementById('main-balance').innerText = sum;
        document.getElementById('cash-out-amount').value = '';
        document.getElementById('cash-out-pin').value = '';
        document.getElementById('cash-out-account').value = '';
    } else {
        alert('pin requred 1234');
    }
    }
} else {
    alert('11 digit mobile number required');
}
});