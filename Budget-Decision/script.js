'use strict';

const h3= document.querySelector('h3');
document.getElementById('checkBtn').addEventListener('click', function(){
    
    let budgetAmount;
    let itemPrice;
    let savings;

    while (true) {
        budgetAmount = Number(prompt('enter your budget amount: '));

        if (!isNaN(budgetAmount) && budgetAmount >= 0) {
            break;
        } else {
            alert("Please enter a valid number for budget.");
        }
    }

     while (true) {
        itemPrice = Number(prompt('enter the price of the item: '));

        if (!isNaN(itemPrice) && itemPrice >= 0) {
            break;
        } else {
            alert("Please enter a valid number for item price.");
        }
    }
    
     while (true) {
        savings = Number(prompt('Enter your savings (optional, enter 0 if none):'));

        if (!isNaN(savings) && savings >= 0) {
            break;
        } else {
            alert("Please enter a valid number for savings.");
        }
    }

    let totalMoney = budgetAmount +savings; 

    if (totalMoney >= itemPrice) {
        let remaining = totalMoney - itemPrice;
        h3.textContent="You can afford this item! Money left: " + remaining;
        console.log("Purchase approved");
    } else {
        let needed = itemPrice - totalMoney;
        h3.textContent=" You cannot afford this item. You need " + needed + " more.";
        console.log("Purchase denied");
    }
});