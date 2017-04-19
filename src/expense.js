class Expense {
    constructor(value, memo, date) {
        this._value = value;
        this._memo = memo;
        this._date = date;
    }
    
    getValue() {
        return this._value;
    }
    
    setValue(value) {
        this._value = value;
    }
    
    getMemo() {
        return this._memo;
    }
    
    setMemo(memo) {
        this._memo = memo;
    }
    
    toString() {
        return JSON.stringify({
            value: this._value,
            memo: this._memo,
            date: this._date.getTime()
        })
    }
    
    importExpense({value, memo, date}) {
        this._value = value;
        this._memo = memo;
        this._date = new Date(date);
    }
}

export default Expense;