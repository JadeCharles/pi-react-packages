import {faList, faPerson, faQuestion} from "@fortawesome/free-solid-svg-icons";

/**
 * @class Model that binds to ViewSelector component.
 * @param data {object|string} - The data to bind to the model. If this is a string, it will be the name field.
 * @param icon { IconDefinition|null } - The icon to display for the item.
 * @param id { string|null } - The id of the item.
 * @param index { number } - The index of the item within a broader list
 */
class ViewSelectionModel {

    /**
     * Model that binds to ViewSelector component.
     * @param data {object|string} - The data to bind to the model. If this is a string, it will be the name field.
     * @param icon { IconDefinition|null } - The icon to display for the item.
     * @param id { string|null } - The id of the item.
     * @param index { number } - The index of the item within a broader list
     */
    constructor(data, icon= null, id = null, index = -1) {
        if (typeof data !== 'object') data = { name: data, icon: icon, id: id, index: index };

        this.icon = icon || (data.icon || faList);
        this.id = id || (data.id || (Math.random() * 1000000).toString(36).toUpperCase());
        this.index = typeof index === 'number' ? index : (typeof data.index === 'number' ? data.index : -1);
        this.name = data.name || "Item: " + (this.index + 1).toString();
    }
    
    static cleanItems(items, minItems = 2) {
        if (!items || !Array.isArray(items)) {
            if (typeof minItems !== 'number' || minItems < 2) minItems = 2;
            if (minItems > 500) minItems = 2;
            
            items = (new Array(minItems)).fill("");
        }
        
        return items.map((item, i) => {
            if (item instanceof ViewSelectionModel) {
                item.index = i;
                return item;
            }
            
            if (typeof item === 'string') return new ViewSelectionModel(item + "(string)", null, null, i);
            
            return new ViewSelectionModel(item + " (" + (typeof item) + ")");
        });
    }
    
    static cleanIndex(index, items) {
        if (typeof index !== 'number') index = parseInt(index?.toString() || "");
        if (isNaN(index) || !Array.isArray(items) || index >= items.length || index < 0) return 0;
        
        return index;
    }
}

export default ViewSelectionModel;
