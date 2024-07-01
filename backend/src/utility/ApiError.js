class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)//msg ko overwrite karna hai
        this.statusCode = statusCode
        this.data = null//mandatory
        this.message = message//overwrite
        this.success = false;//api error ko handle kar rahe na ki api response ko handle karrahe//flag honga toh false karenge
        this.errors = errors//overwrite 

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
//kya respone ke liye class likha jata
export {ApiError}