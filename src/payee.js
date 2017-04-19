class Payee {
    constructor(name) {
        this._name = name;
    }
    
    getName() {
        return this._name;
    }
    
    changeName(name) {
        this._name = name;
    }
    
    toString() {
        return JSON.stringify({
            name: this._name
        });
    }
    
    importPayee({name}) {
        this._name = name;
    }
}

export default Payee;