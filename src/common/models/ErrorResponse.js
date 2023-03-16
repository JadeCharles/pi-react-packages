class ErrorResponse {
    constructor(err, defaultErrorMessage = null) {
        const data = err?.response?.data ?? {};

        this.message = data.message || defaultErrorMessage;
        this.code = data.error_code || 0;
        this.httpCode = err?.response?.statusCode || 500;
        this.objects = data?.objects || null;
        
        console.log('HttpCode: ' + this.httpCode);
    }
    
    toFormError(delimiter = ". ") {
        let formError = {};
        
        if (!this.objects || !Array.isArray(this.objects)) {
            if (!!this.message) formError.general = this.message;
            return formError;
        }
        
        for(let i = 0; i < this.objects.length; i++) {
            const f = this.objects[i];
            if (f.field_name && f.message) { 
                let msg = formError[f.field_name];
                if (!!msg) msg += delimiter + f.message;
                else msg = f.message;
                
                formError[f.field_name] = msg.trim();
            }
        }
        
        return formError;
    }
}

export default ErrorResponse;
