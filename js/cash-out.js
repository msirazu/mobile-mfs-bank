document.getElementById('cash-out-btn').addEventListener
('click', function(event){
    event.preventDefault();
    const mainBalance = innerTextNumberConverter('main-balance');
    const addAmount = numberValueConverter('cash-out-amount');
    const accountNumber = getValue('cash-out-account');
    const pinNumber = numberValueConverter('cash-out-pin');

if (accountNumber.length === 11) {
    if (addAmount <= 0 || addAmount === '') {
        alert('valid amount must be given. 0 & - amount not allowed');
    } else {
        if (pinNumber === 1234) {
            if (addAmount < mainBalance ) {
                const sub = mainBalance - addAmount;
                document.getElementById('main-balance').innerText = sub;
                const transactionContainer = document.getElementById('transaction-list-area');
                const tAreaDiv = document.createElement('div');
                tAreaDiv.classList.add('bg-green-100', 'p-5', 'rounded', 'mt-5');
                tAreaDiv.innerHTML = `
                <h5 class='font-bold text-base text-center mb-2'>Cashout Amount</h5>
                <p>Cashout amount = ${addAmount}</p>
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