class DragController { 
    static instance = new DragController();
    static defaultKey = "data";
    
    constructor() {
        this.dataStore = {};
        this.lastKey = null;
    }
    
    setData(key, data) { 
        if (!key) return false;
        
        if (typeof data === 'undefined') { 
            data = key;
            key = DragController.defaultKey;
        } else if (typeof key !== 'string') {
            throw new Error("DragController.setData: Key must be a string");
        }
        
        this.lastKey = key;
        this.dataStore[key] = data;
        
        return !!this.dataStore[key];
    }
    
    getData(key) {
        if (!key) key = this.lastKey;
        return this.dataStore[key];
    }
    
    removeData(key) {
        const refreshKey = this.lastKey === key;
        delete this.dataStore[key];
        
        if (refreshKey) {
            this.lastKey = null;
            for(let k in this.dataStore) {
                this.lastKey = k;
            }
        }
    }
    
    clear() {
        console.warn("DATA CLEARED:");
        delete this.dataStore;
        this.dataStore = {};
    }
}

export default DragController;
