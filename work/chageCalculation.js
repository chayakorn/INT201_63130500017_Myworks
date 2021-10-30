class Money {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    toString() {
        return `${this.value}`;
    }
}
const banknote500 = new Money(500);
const banknote100 = new Money(100);
const banknote50 = new Money(50);
const banknote20 = new Money(20);
const banknote10 = new Money(10);
const banknote5 = new Money(5);
const banknote2 = new Money(2);
const banknote1 = new Money(1);

function changeCalculation(price, moneyFromCustomer) {
    if (price > moneyFromCustomer) {
        return 'Not enough money!!';
    }
    let total;
    total = moneyFromCustomer - price;
    let arrayBank = [banknote500, banknote100, banknote50, banknote20, banknote10, banknote5, banknote2, banknote1];
    let countBank = [bank500 = 0, bank100 = 0, bank50 = 0, bank20 = 0, bank10 = 0, bank5 = 0, bank2 = 0, bank1 = 0];
    for (let i = 0; i < arrayBank.length; i++) {
        while (total - arrayBank[i] >= 0) {
            total -= arrayBank[i];
            countBank[i]++;
        }
    }
    let ans = `Total ${moneyFromCustomer - price} `;
    for (i = 0; i < countBank.length; i++) {
        if (countBank[i] > 0) {
            if (i == countBank.length - 1) {
                ans += `Banknote${arrayBank[i].value}: ${countBank[i]} `
            } else
                ans += `Banknote${arrayBank[i].value}: ${countBank[i]}, `;
        }
    }
    return ans;
}

console.log(changeCalculation(10, 1000));