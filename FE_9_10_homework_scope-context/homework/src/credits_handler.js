function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        cardNumber = key;
    return {
        getCardOptions() {
                return {
                    balance, transactionLimit, historyLogs, cardNumber
                }
            },

            putCredits(finances) {
                balance += finances;
                historyLogs.push({
                    operationType: 'Received credits',
                    credits: finances,
                    operationTime: new Date().toLocaleString('en-GB')

                });
            },

            takeCredits(resource) {
                if (transactionLimit >= resource && balance >= resource) {
                    balance -= resource;
                } else {
                    console.log(`Error: Transaction limit and remaining balance 
                                should be greater than credits you want to take.`);
                }
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: resource,
                    operationTime: new Date().toLocaleString('en-GB')
                });
            },

            setTransactionLimit(limit) {
                transactionLimit = limit;
                historyLogs.push({
                    operationType: 'Transaction limit change',
                    credits: limit,
                    operationTime: new Date().toLocaleString('en-GB')
                });
            },

            transferCredits(transfer, card) {
                balance = balance - transfer;
                let tax = 0.995;
                let transferCredit = transfer * tax;
                if (transactionLimit < transfer) {
                    console.log('Error. Transaction limit is exceeded');
                } else if (balance < transfer) {
                    console.log('Error.	Not sufficient funds on your account');
                } else {
                    card.putCredits(transferCredit);
                }
            }
    }
}

class userAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.arrayLength = 3;
    }
    addCard() {
        if (this.cards.length < this.arrayLength) {
            let newCard = userCard(this.cards.length + 1);
            this.cards.push(newCard);
        } else {
            console.log('Error. It is maximum amount of cards');
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}