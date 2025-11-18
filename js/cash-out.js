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
            if (convertedAddAmount < convertedMainBalance ) {
                const sum = convertedMainBalance - convertedAddAmount;
                document.getElementById('main-balance').innerText = sum;
                const transactionContainer = document.getElementById('transaction-list-area');
                const tAreaDiv = document.createElement('div');
                tAreaDiv.classList.add('bg-green-100', 'p-5', 'rounded', 'mt-5');
                tAreaDiv.innerHTML = `
                <h5 class='font-bold text-base text-center mb-2'>Cashout Amount</h5>
                <p>Cashout amount = ${convertedAddAmount}</p>
                <p>Account number = ${accountNumber}</p>
                `;
                transactionContainer.appendChild(tAreaDiv);
            } else {
                alert('can not exceed max amount');
            }
    } else {
        alert('pin number requred 1234');
    }
    }
} else {
    alert('11 digit mobile number required');
}
});