document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositField = document.getElementById('deposit-field');
  const depositAmountString = depositField.value;
  const depositAmount = parseFloat(depositAmountString);

  const depositBalance = document.getElementById('deposit-balance');
  const depositTotalBalanceString = depositBalance.innerText;
  const previousdepositTotal = parseFloat(depositTotalBalanceString);
  const currentDepositTotal = depositAmount + previousdepositTotal;
  depositBalance.innerText = currentDepositTotal;
  depositField.value = ''

  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotal.innerText;
  const newCurrentBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = newCurrentBalanceTotal + depositAmount;
  balanceTotal.innerText = currentBalanceTotal;

})