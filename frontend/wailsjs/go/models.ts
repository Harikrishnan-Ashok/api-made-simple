export namespace model {
	
	export class NewEndpoint {
	    id: string;
	    method: string;
	    path: string;
	    errorStatus: number;
	    errorResponse: string;
	    successStatus: number;
	    successResponse: string;
	
	    static createFrom(source: any = {}) {
	        return new NewEndpoint(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.method = source["method"];
	        this.path = source["path"];
	        this.errorStatus = source["errorStatus"];
	        this.errorResponse = source["errorResponse"];
	        this.successStatus = source["successStatus"];
	        this.successResponse = source["successResponse"];
	    }
	}

}

