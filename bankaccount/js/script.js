function bankAccount(ownerName) {
    let balance = 0;
    let owner = ownerName;
    return {
        withdrawal: function(withdrawalAmount) {
            if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
                balance -= withdrawalAmount;
                return `Withdrawal successful. Remaining balance: ${balance}`;
            } else {
                return "Invalid withdrawal amount";
            }
        },
        deposit: function(depositAmount) {
            if (depositAmount > 0) {
                balance += depositAmount;
                return `Deposit successful. New balance: ${balance}`;
            } else {
                return "Invalid deposit amount.";
            }
        },
        getBalance: function() {
            return balance;
        },
        getOwnerName: function() {
            return ownerName;
        }
    }
}
let account;

  function enterName() {
    const ownerName = prompt('Enter your name:');
    if (ownerName) {
      account = bankAccount(ownerName);
    }
    updateOutput()
  }
  
  function deposit() {
    if (account) {
        const amount = parseFloat(prompt("Enter amount to deposit:"));
        if (!isNaN(amount)) {
            account.deposit(amount);
        } else {
            alert("Please enter a valid number for deposit.");
        }
    } else {
        alert("Please enter your name first.");
    }
    updateOutput()
}

function withdrawal() {
    if (account) {
        const amount = parseFloat(prompt("Enter amount to withdraw:"));
        if (!isNaN(amount)) {
            account.withdrawal(amount);
        } else {
            alert("Please enter a valid amount");
        }
    } else {
        alert("Please enter your name first.");
    }
    updateOutput()
}

function updateOutput() {
    const accountDetails = document.getElementById("accountDetails");
    if (account) {
        accountDetails.innerHTML = `
            <p>Name: ${account.getOwnerName()}</p>
            <p>Balance: $${account.getBalance()}</p>
        `;
    } else {
        accountDetails.innerHTML = "";
    }
}