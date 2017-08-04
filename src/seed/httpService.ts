import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// Rx.js operator
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// app config
import { BASE_URL } from '../app/config';

/**
 * Service Seed
 * @class
 */
@Injectable()
export class ServiceName {
    private baseUrl: string = BASE_URL;
    /** @constructs */
    constructor(private http: Http) { }

    /**
     * Header object
     * @description get http header object
     * @private
     * @param none
     * @return {object} header - Default: application/json
     */
    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    /**
     * Extract data
     * @description extract data from response
     * @private
     * @param {Response} res
     * @return {object} body - Default: {}
     */
    private extractData(res: Response) {
        return res.json() || {};
    }

    /**
     * Handle error
     * @description this could also be a private method of the component class
     * @private
     * @param {Response} error
     * @return {object} body - Default: {}
     */
    private handleError(error: Response) {
        // throw an application level error
        return Observable.throw(error.json().error || 'Opps got an error on api');;
    }

    /**
     * Get all data
     * @description getAll service method
     * @param none
     * @return {any} Observable 
     * @example 
     * this.serviceName
     *      .getAll()
     *      .subscribe(
     *          p => console.log(p),
     *          e => console.log(e)
     *       );
     */
    getAll(): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/<service_name>`, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Get data
     * @description get service method
     * @param {number} id - get item id
     * @return {any} Observable 
     * @example 
     * this.serviceName
     *      .get(<id>)
     *      .subscribe(
     *          p => console.log(p),
     *          e => console.log(e)
     *       );
     */
    get(id: number): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/<service_name>/${id}`, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Save data
     * @description save service method
     * @param {any} data - This is data object 
     * @return {any} Observable 
     * @example 
     * this.serviceName
     *      .get(data)
     *      .subscribe(
     *          p => console.log(p),
     *          e => console.log(e)
     *       );
     */
    save(data: any): Observable<any> {
        return this.http
            .put(`${this.baseUrl}/<service_name>/${data.id}`, JSON.stringify(data), { headers: this.getHeaders() })
            .catch(this.handleError);
    }

    /**
     * Delete data
     * @description delete service method
     * @param {number} id - Delete item id
     * @return {any} Observable 
     * @example 
     * this.serviceName
     *      .delete(id)
     *      .subscribe(
     *          p => console.log(p),
     *          e => console.log(e)
     *       );
     */
    delete(id: number): Observable<any> {
        return this.http
            .delete(`${this.baseUrl}/<service_name>/${id}`, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Patch data
     * @description patch service method
     * @param {number} id - Delete item id
     * @return {any} Observable 
     * @example 
     * this.serviceName
     *      .patch({id: '12' , name: 'abc'})
     *      .subscribe(
     *          p => console.log(p),
     *          e => console.log(e)
     *       );
     */
    patch(data: any): Observable<any> {
        return this.http
            .patch(`${this.baseUrl}/<service_name>/${data.id}`, data, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    }
}
