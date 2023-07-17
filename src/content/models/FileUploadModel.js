class FileUploadModel {
    constructor(formFile, title = "", onLoaded = null) {
        this.filePath = null;
        this.file = formFile;
        this.name = formFile?.name;
        this.contentType = formFile.type || "file";
        this.title = typeof title === 'string' ? title : "";
        this.id = (Math.random() * 100000000000000000).toString() + "-" + (new Date()).getTime().toString();
        
        if (typeof title === 'function' && typeof onLoaded !== 'function')
            onLoaded = title;
        
        if (!!formFile) {
            let reader = new FileReader();
            const me = this;
            
            reader.onload = (ev) => {
                me.filePath = ev.target.result;
                if (typeof onLoaded === "function") onLoaded();
            };

            reader.readAsDataURL(formFile);
        }
    }
    
    static isJson(text) { 
        try { 
            JSON.parse(text); 
            return true; 
        } catch (e) { 
            return false; 
        }
    }
    
    static formatJson(text, fallback = null) { 
        if (!FileUploadModel.isJson(text)) return (fallback || text);
        return JSON.stringify(JSON.parse(text), null, 2); 
    }
    
    static async fromTextItemsAsync(textItems) {
        let newFiles = [];
        let countDown = textItems?.length || 0;
        const map = {};
        
        return new Promise((resolve, reject) => {
            if (countDown <= 0) {
                resolve(newFiles);
                return;
            }

            for(let i = 0; i < textItems.length; i++) {
                const textItem = textItems[i];
                const kind = textItem.kind;
                const contentType = textItem.type;
                
                if (kind === "file") { 
                    countDown--;
                    
                    if (countDown <= 0) {
                        resolve(newFiles);
                        return;
                    }
                    
                    continue;
                }
                
                // eslint-disable-next-line no-loop-func
                textItem.getAsString((text) => {
                    countDown--;
                    
                    const isUrl = contentType === "text/uri-list";
                    const name = isUrl ? 
                        "URL: " + (text.length > 64 ? text.substring(0, 64) + "..." : text) :
                        contentType + ": " + (text.length > 64 ? text.substring(0, 64) + "..." : text);
                    
                    const newId = (Math.random() * 100000000000000000).toString() + "-" + (new Date()).getTime().toString();
                    const item = {
                        name: name,
                        text: FileUploadModel.formatJson(text),
                        contentType: contentType || kind,
                        id: newId,
                        uri: isUrl ? text : null
                    };
                    
                    newFiles.push(item);
                    
                    if (countDown <= 0) {
                        resolve(newFiles);
                    }
                });
            }
        });        
    }
    
    static async fromFilesAsync(formFiles) {
        let newFiles = [];
        let countDown = formFiles?.length || 0;
        console.warn("fromFilesAsync: " + countDown);

        return new Promise((resolve, reject) => {
            //if (!Array.isArray(formFiles)) reject("Invalid files array. Found type of: " + (typeof formFiles));
            if (countDown <= 0) {
                console.log("No files to load. Resolving");
                resolve(newFiles);
                return;
            }

            for(let i = 0; i < formFiles.length; i++) {
                // eslint-disable-next-line no-loop-func
                const fm = new FileUploadModel(formFiles[i], "Item " + i.toString(), () => {
                    countDown--;
                    console.log("File[" + i.toString() + " of " + formFiles.length + "] Countdown = " + countDown);

                    if (countDown <= 0) {
                        // When all files are read/loaded asynchronously, set the file list state view
                        console.log("Files resolved");
                        resolve(newFiles);
                    }
                });
                
                newFiles.push(fm);
            }
        });
        
    };
}

export default FileUploadModel;
