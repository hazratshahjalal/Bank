document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const withdrawFieldAmountString = withdrawField.value;
  const WithrawFieldAmount = parseFloat(withdrawFieldAmountString);

  const withdrawAmount = document.getElementById('withdraw-amount');
  const withdrawAmountString = withdrawAmount.innerText;
  const newWithdrawAmount = parseFloat(withdrawAmountString);

  const currentWithdrawAmount = WithrawFieldAmount + newWithdrawAmount;
  withdrawAmount.innerText = currentWithdrawAmount;
  withdrawField.value = '';

  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotal.innerText;
  const newCurrentBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = newCurrentBalanceTotal - WithrawFieldAmount;
  balanceTotal.innerText = currentBalanceTotal;

})