class PagerController {
    static defaultPageSize = 24;
    static defaultPageViewCount = 2;
    
    constructor(options, pageSize = null, onPageClick = null) {
        if (options === null) options = {};
        
        if (typeof pageSize === 'function') {
            onPageClick = pageSize;
            pageSize = undefined;
        }

        if (typeof options === "function") { 
            const tmp = onPageClick;
            onPageClick = options;
            options = (typeof tmp === "object") ? tmp : {};

            if (typeof tmp === 'number') pageSize = tmp;
        }

        if (typeof options !== 'object') {
            if (typeof options === 'function') onPageClick = options;
            if (typeof options !== 'number') options = 0;
            
            options = { page: options };
        }        
        
        if (typeof onPageClick !== 'function') { 
            onPageClick = undefined;
        }
        
        if (typeof options.onPageClick !== 'function') options.onPageClick = onPageClick;
        if (typeof options.pageSize !== 'number') options.pageSize = pageSize;
        
        this.pagerRegistry = {};
        this.page = options.page || 0;
        this.pageViewCount = options.pageViewCount || PagerController.defaultPageViewCount;
        this.pageSize = options.pageSize || PagerController.defaultPageSize;
        
        this.onPageClick = options.onPageClick === null || typeof options.onPageClick !== 'function' ? (e) => {
            console.warn('No onPageClick');
            
        } : options.onPageClick;

        this.setCurrentPage = (p) => {
            this.page = p;
            console.warn("Page was set by the controller, but no render update was called.");

            return null;
        };
    }
    

    register(pagerId, setFunction) {
        if (typeof setFunction !== "function") throw new Error("setFunction must be a function");
        if (!pagerId || typeof pagerId !== "string") throw new Error("Invalid Pager Id");

        this.pagerRegistry[pagerId] = setFunction;

        return true;
    }

    notify(page, senderId) { 
        let count = 0;
        for (let pagerId in this.pagerRegistry) {
            if (pagerId === senderId) continue;

            const setPg = this.pagerRegistry[pagerId];
            setPg(page);
            count++;
        }

        return count;
    }

    mapLineItems(items, callback) {
        let results = [];
        if (!Array.isArray(items)) return results;
        
        if (typeof callback !== 'function') {
            throw new Error('Missing callback');
        }
        
        let start = this.page * this.pageSize;
        let end = Math.min(items.length, start + this.pageSize);
        
        for (let i = start; i < end; i++) {
            let item = callback(items[i], i);
            results.push(item);
        }
        
        return results;
    };
    
}

export default PagerController;
