class Budget {
    constructor(name, dateCreated) {
        this._name = name;
        this._dateCreated = dateCreated;
        this._lastModified = dateCreated;
        this._deleted = false;
    }
    
    getName() {
        return this._name;
    };

    setName(name) {
        this._name = name;
        this._lastModified = new Date();
    }
    
    getDate() {
        return this._dateCreated;
    }
    
    getLastModified() {
        return this._lastModified;
    }

    deleteBudget() {
        this._deleted = true;
        this._lastModified = new Date();
    }
    
    isDeleted() {
        return this._deleted;
    }
    
    importBudget({name, dateCreated, lastModified, deleted}) {
        this._name = name;
        this._dateCreated = new Date(dateCreated);
        this._lastModified = new Date(lastModified);
        this._deleted = deleted;
    }
    
    toString() {
        return JSON.stringify({
            name: this._name,
            dateCreated: this._dateCreated.getTime(),
            lastModified: this._lastModified.getTime(),
            deleted: this._deleted
        });
    }
}

export default Budget;
