import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// Rx.js operator
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// app config
import { BASE_URL } from '../app/config';

@Injectable()
export class PeopleService {
    private baseUrl: string = BASE_URL;

    constructor(private http: Http) { }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    // this could also be a private method of the component class
    private handleError(error: Response) {
        // throw an application level error
        return Observable.throw(error.json().error || 'Opps got an error on api');;
    }

    getAll(): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/people`, { headers: this.getHeaders() })
            .map(res => res.json())
            .catch(this.handleError);
    }

    get(id: number): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/people/${id}`, { headers: this.getHeaders() })
            .map(res => res.json())
            .catch(this.handleError);
    }

    save(person: any): Observable<any> {
        // this won't actually work because the StarWars API 
        // is read-only. But it would look like this:
        return this.http
            .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), { headers: this.getHeaders() })
            .catch(this.handleError);
    }

}
