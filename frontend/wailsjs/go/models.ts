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
	export class EndpointStore {
	    listOfEndpoints: NewEndpoint[];
	
	    static createFrom(source: any = {}) {
	        return new EndpointStore(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.listOfEndpoints = this.convertValues(source["listOfEndpoints"], NewEndpoint);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

