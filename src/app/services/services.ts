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

    public getUser(mail: any, pass: any) {
        const params = { mail: mail, pass: pass };
        const config = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
            console.log(params);

        return this.http.post('http://34.133.145.42/api/getuser', { params, config });

    }

    public addproduct(nombre:any, sku:any, precio:any, cantidad:any, vendedor:any) {
        const params = { nombre:nombre, sku:sku, precio:precio, cantidad:cantidad, vendedor:vendedor };
        const config = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        return this.http.post('http://34.133.145.42/api/addproduct', { params, config });

    }
    public getproductseller(vendedor:any) {
        const params = { vendedor: vendedor};
        const config = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        return this.http.post('http://34.133.145.42/api/getproductseller', { params, config });

    }
    public getproduct() {
        const params = {};
        const config = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        return this.http.post('http://34.133.145.42/api/getproduct', { params, config });

    }
    public findproduct(filtro: any) {
        const params = { filtro:filtro };
        const config = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        return this.http.post('http://34.133.145.42/api/findproduct', { params, config });

    }
    public findproductRange(filtro: any) {
        const params = { filtro: filtro };
        const config = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        return this.http.post('http://34.133.145.42/api/findproductRange', { params, config });

    }

  

}
