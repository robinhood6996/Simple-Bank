
function inputValue(id) {

    //get value from input field
    const element = document.getElementById(id);
    const ammount = parseFloat(element.value);

    //remove value from input field
    element.value = '';
    return ammount;
}
function updateTotalField(elementId, ammount) {

    //get value from previus ammount
    const present = document.getElementById(elementId);
    const pastAmmount = parseFloat(present.innerText);

    //Sum both value and set to total ammount
    const totalDeposit = pastAmmount + ammount;
    present.innerText = totalDeposit;
}
function getCurrentbalance() {
    //get past balance
    const element = document.getElementById('balance-total');
    const pastBalanceAmmount = parseFloat(element.innerText);
    return pastBalanceAmmount;
}
function balanceUpdate(elementId, newAmmount, isAdd) {
    //get past balance
    const element = document.getElementById(elementId);
    const pastBalanceAmmount = getCurrentbalance();

    if (isAdd == true) {
        //sum both amount and set them as new total balance
        const totalBalance = pastBalanceAmmount + newAmmount;
        element.innerText = totalBalance;
    }
    else {
        //sum both amount and set them as new total balance
        const totalBalance = pastBalanceAmmount - newAmmount;
        element.innerText = totalBalance;
    }

}


//Deposite Functions
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmmount = inputValue('deposit-input');
    if (depositAmmount > 0) {
        updateTotalField('deposit-total', depositAmmount);
        balanceUpdate('balance-total', depositAmmount, true);
    }
    if (depositAmmount < 0) {
        alert("we don't accept negative ammount");
    }
});


document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmmount = inputValue('withdraw-input');
    const currentBalance = getCurrentbalance();
    if (withdrawAmmount > 0 && withdrawAmmount <= currentBalance) {
        updateTotalField('withdraw-total', withdrawAmmount);
        balanceUpdate('balance-total', withdrawAmmount, false);
    }

    if (withdrawAmmount > currentBalance) {
        alert('Insufficient Balance');
    }

});

