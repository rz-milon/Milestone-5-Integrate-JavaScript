/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by parseFloat
3. get previous withdraw totl
4. calculate total withdraw amount
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total

7. clear the innput field
*/

// step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step-5:
    const balanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);



    if (newWithdrawAmount > previousBlanceTotal) {
        alert('Tomar eto taka ace naki j tumi tulte aicho');
        return;
    }


    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: 
    const newBalaneTotal = previousBlanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalaneTotal;
})