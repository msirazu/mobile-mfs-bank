document.getElementById('add-money-btn').addEventListener
('click', function(event){
    event.preventDefault();
    const mainBalance = innerTextNumberConverter('main-balance');
    const addAmount = numberValueConverter('add-money-amount');
    const accountNumber = getValue('add-money-account');
    const pinNumber = numberValueConverter('add-money-pin');
    const bankAccount = getValue('bank-account');

if (accountNumber.length === 11) {
    if (addAmount <= 0 || addAmount === '') {
        alert('valid amount must be given. 0 & - amount not allowed');
    } else {
        if (pinNumber === 1234) {
        const sum = mainBalance + addAmount;
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