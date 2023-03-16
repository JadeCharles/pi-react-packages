class SortController {
    constructor(field, mult) {
        this.mult = mult === 1 ? 1 : -1;
        this.field = field || "";
    }

    sortBy(field) {
        let m = field === this.field ? -1 : 1;
        console.warn("Sorting by " + field + " " + m);
        return new SortController(field, m * this.mult);
    }

    sort(items) {
        if (!items || !Array.isArray(items)) return items;

        items = items.sort((a, b) => {
            let aVal = a[this.field];
            let bVal = b[this.field];

            if (typeof aVal === "string") {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (aVal < bVal) return -1 * this.mult;
            if (aVal > bVal) return this.mult;

            return 0;
        });

        return items;
    }
}

export default SortController;
