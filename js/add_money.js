document.getElementById('add-money-btn').addEventListener
('click', function(event){
    event.preventDefault();
const mainBalance = document.getElementById('main-balance').innerText;
const convertedMainBalance = parseFloat(mainBalance);
const addAmount = document.getElementById('add-money-amount').value;
const convertedAddAmount = parseFloat(addAmount);
const accountNumber = document.getElementById('add-money-account').value;
const pinNumber = document.getElementById('add-money-pin').value;
const convertedPinNumber = parseInt(pinNumber);

if (accountNumber.length === 11) {
    if (addAmount <= 0 || addAmount === '') {
        alert('amount must be given');
    } else {
        if (convertedPinNumber === 1234) {
        const sum = convertedMainBalance + convertedAddAmount;
        document.getElementById('main-balance').innerText = sum;
    } else {
        alert('pin number invalid');
    }
    }
} else {
    alert('11 digit mobile number required');
}
});