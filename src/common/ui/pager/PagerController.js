import React from 'react';

class PagerController {
    static defaultPageSize = 20;
    static defaultPageViewCount = 2;
    
    constructor(options, pageSize = null, onPageClick = null) {
        if (options === null) options = {};
        
        if (typeof pageSize === 'function') {
            onPageClick = pageSize;
            pageSize = undefined;
        }
        
        if (typeof onPageClick !== 'function') { 
            onPageClick = undefined;
        }
        
        if (typeof options !== 'object') {
            if (typeof options === 'function') onPageClick = options;
            if (typeof options !== 'number') options = 0;
            
            options = { page: options };
        }        
        
        if (typeof options.onPageClick !== 'function') options.onPageClick = onPageClick;
        if (typeof options.pageSize !== 'number') options.pageSize = pageSize;
        
        this.page = options.page || 0;
        this.pageViewCount = options.pageViewCount || PagerController.defaultPageViewCount;
        this.pageSize = options.pageSize || PagerController.defaultPageSize;
        
        this.onPageClick = options.onPageClick === null || typeof options.onPageClick !== 'function' ? (e) => 
        {
            console.warn('No onPageClick'); 
            
        } : options.onPageClick;
    }
    
    setCurrentPage(page) {
        this.page = page;
    };

    mapLineItems(items, callback) {
        let results = [];
        if (!Array.isArray(items)) return results;
        
        if (typeof callback !== 'function') {
            throw 'Missing callback';
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
