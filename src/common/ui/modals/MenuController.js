class MenuController { 
    constructor() { 
        this.state = 0;
        this.data = {};

        this.onMenuItemAdded = {};

        this.onStateChange = (newState) => { 
            console.log("New State: " + newState);
        }

        this.open = () => this.setState(1);
        this.close = () => this.setState(0);
        this.toggle = () => this.state === 0 ? this.open() : this.close();
        this.setContent = (content) => null;
    }

    addMenuItem(item, key) { 
        if (typeof key === "number") key = key.toString();
        else if (!key) key = null;
        else key = key.toString();

        if (typeof this.onMenuItemAdded[key] !== "function") return false;

        const result = this.onMenuItemAdded[key](item);
        return !!result && result !== false;
    }

    setState(state) {
        if (typeof state !== "number")
            throw new Error("Invalid state. Number expected, but found '" + (typeof state) + "'");
        
        const success = this.state !== state;
        this.state = state;

        if (success && typeof this.onStateChange === "function") { 
            this.onStateChange(state);
        }

        return success;
    }

    setData(value, key = "") {
        if (typeof key !== "string") key = "";

        if (key === "") {
            if (typeof value !== "object")
                throw new Error("Invalid data. Object expected, but found '" + (typeof value) + "'");
            
            this.data = value;
            return true;
        }

        if (typeof this.data !== "object")
            this.data = {};

        this.data[key] = value;

        return true;
    }

    getData(key = "", defaultValue = null) { 
        if (typeof key !== "string") key = "";
        if (key === "") return this.data;

        const dat = this.data[key];

        if (typeof dat === "undefined")
            return defaultValue;

        return dat;
    }
}

export default MenuController;
