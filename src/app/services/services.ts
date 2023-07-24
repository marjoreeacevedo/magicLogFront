import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Service {

    constructor(

        private http: HttpClient

    ) { }
    public addUser(mail:any,pass:any) {
        const params = {mail:mail,pass:pass};
        const config = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        return this.http.post('http://34.133.145.42/api/register', { params,config });

    }

}
