document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositfield = document.getElementById('Deposit-field');
    const DepositAmountstring = depositfield.value;
    const newDepositAmount = parseFloat(DepositAmountstring);
    depositfield.value = '';
    
    const depositTotalElement = document.getElementById('deposit-total');
    const privousDepositTotalstring = depositTotalElement.innerText;
    const privousDepositTotal = parseFloat(privousDepositTotalstring);

    // current Total DepositAmount

    const currentDepositAmountTotal = newDepositAmount + privousDepositTotal;
    depositTotalElement.innerText = currentDepositAmountTotal;


    const BalanceTotal = document.getElementById('Balance-total');
    const privouseBalanceTotalString = BalanceTotal.innerText;
    const privousBalanceTotal = parseFloat(privouseBalanceTotalString);

    // current Total Balance

    const currentBalanceAmountTotal = privousBalanceTotal + newDepositAmount;
    BalanceTotal.innerText = currentBalanceAmountTotal;

})