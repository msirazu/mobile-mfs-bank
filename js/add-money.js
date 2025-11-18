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
const bankAccount = document.getElementById('bank-account').value;

if (accountNumber.length === 11) {
    if (addAmount <= 0 || addAmount === '') {
        alert('valid amount must be given. 0 & - amount not allowed');
    } else {
        if (convertedPinNumber === 1234) {
        const sum = convertedMainBalance + convertedAddAmount;
        document.getElementById('main-balance').innerText = sum;
        const transactionContainer = document.getElementById('transaction-list-area');
        const tAreaDiv = document.createElement('div');
        tAreaDiv.classList.add('bg-green-100', 'p-5', 'rounded', 'mt-5');
        tAreaDiv.innerHTML = `
        <h5 class='font-bold text-base text-center mb-2'>Added Money</h5>
        <p>Amount = ${addAmount}</p>
        <p>Account number = ${accountNumber}</p>
        <p>Bank account = ${bankAccount}</p>
        `;
        transactionContainer.appendChild(tAreaDiv);
    } else {
        alert('pin requred 1234');
    }
    }
} else {
    alert('11 digit mobile number required');
}
});