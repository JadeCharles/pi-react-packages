class ModalMenuItem { 
    constructor(json) { 
        if (typeof json === "string") json = { label: json };
        if (!json) json = {};

        this.id = "modal-menu-item-" + Math.floor(Math.random() * 9999999999).toString(16);
        this.label = json.label || json.name || json.text || json.caption || null;
        this.data = json.data;
        this.onClick = typeof json.onClick === "function" ? json.onClick : null;
        this.href = json.href || null;
        this.id = "modal-menu-item-" + Math.floor(Math.random() * 9999999999).toString(16);
        this.index = typeof json.index === "number" ? json.index : -1;
    }

    toElement(owner, options = {}) {
        if (typeof document === "undefined") return null;
        if (typeof options === "number") options = { index: options };

        const index = options?.index === "number" ? options.index : this.index;
        const div = document.createElement("div");

        div.id = this.id;

        if (index >= 0) div.index = index;

        if (!!this.label) {
            const link = document.createElement("a");
            link.className = "menu-item-link";
            link.href = options.href || "javascript:void(0);";
            link.innerHTML = this.label.toString();

            if (typeof this.onClick === "function") { 
                link.addEventListener("click", (e) => { 
                    const result = this.onClick(this, e);
                    if (result !== false && typeof owner?.closeAsync === "function")
                        owner.closeAsync(e);
                });
            }

            div.className = "menu-item";
            div.appendChild(link);
        } else {
            div.className = "menu-item separator";
            div.innerHTML = "&nbsp;";
        }

        if (!!this.href) div.href = this.href;

        return div;
    }
}

export default ModalMenuItem;
