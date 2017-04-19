class Budgets {
    constructor() {
        this._keyCounter = 0;
        this._data = {};
    }

    getBudget = (key) => this._data[key];

    addBudget(budget) {
        this._data[this._keyCounter] = budget;
        this._keyCounter++;
    }

    removeBudget(key) {
        this._data[key].deleteBudget();
    }

    importBudgetsData({key, data}) {
        this._keyCounter = key;
        this._data = data;
    }

    toString() {
        return JSON.stringify({
            key: this._keyCounter,
            data: this._data
        })
    }
}

export default Budgets;