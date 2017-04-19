class Category {
    constructor(name) {
        this._name = name;
    }

    setName(name) {
        this._name = name;
    }

    getName = () => this._name;
}

export default Category;
