class Account {
    constructor(name, amount) {
        this._name = name;
        this._amount = amount;
    }

    setName(name) {
        this._name = name;
    }

    setAmount(amount) {
        this._amount = amount;
    }

    importAccount({name, amount}) {
        this._name = name;
        this._amount = amount;
    }

    toString() {
        return {
            name: this._name,
            amount: this._amount
        }
    }
}

export default Account;