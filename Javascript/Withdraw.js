document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawfiled = document.getElementById('Withdraw-field');
    const withdrawAmountString = withdrawfiled.Value;
    const newwithdrawvalue = parseFloat(withdrawAmountString);
    withdrawfiled.Value = '';
    
    const privousWithdrawTotal = document.getElementById('Withdraw-total');
    const privousWithdrawTotalstring = privousWithdrawTotal.innerText;
    const newwithdrawtotalvalue = parseFloat(privousWithdrawTotalstring);
    
})