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
