document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cash-out-section').style.display = 'none';

document.getElementById('add-money-box').addEventListener
('click', function(){
    document.getElementById('add-money-section')
    .style.display = 'block';
    document.getElementById('latest-payment-section')
    .style.display = 'none';
    document.getElementById('cash-out-section')
    .style.display = 'none';
});

document.getElementById('cash-out-box').addEventListener
('click', function(){
    document.getElementById('add-money-section')
    .style.display = 'none';
    document.getElementById('latest-payment-section')
    .style.display = 'none';
    document.getElementById('cash-out-section')
    .style.display = 'block';
});

document.getElementById('transaction-box').addEventListener
('click', function(){
    document.getElementById('add-money-section')
    .style.display = 'none';
    document.getElementById('latest-payment-section')
    .style.display = 'block';
    document.getElementById('cash-out-section')
    .style.display = 'none';
});

document.getElementById('view-all-btn').addEventListener
('click', function(){
    document.getElementById('add-money-section')
    .style.display = 'none';
    document.getElementById('latest-payment-section')
    .style.display = 'block';
    document.getElementById('cash-out-section')
    .style.display = 'none';
});