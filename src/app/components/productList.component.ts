
import { Component, OnInit } from '@angular/core';

import { Service } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'new-user-root',
  templateUrl: '../views/productList.component.html',
  styleUrls: ['../app.component.css']

})
export class productListComponent {

  title = 'Magic Log Market';
  public nombre:any;
  public sku:any;
  public precio:any;
  public vendedor:any
  public cantidad:any;
  public products:any;
  public cabecera=['nombre','sku','precio','cantidad'];
  
  


  constructor(

    private Service: Service,
    private router: Router


  ) { }
  ngOnInit() {
    this.getproduct();

  }
  async getproduct() {
    // this.spinner.show();
    try {
      const getproduct: any = await this.Service.getproduct().toPromise();
      let res = getproduct['data'];
      console.log(res);
      if (getproduct['status'] == "Success") {
        this.products = getproduct['data'];
      }


      // this.spinner.hide();
    } catch (error) {
      console.log(error);
      // this.spinner.hide();
    }
  }



  async addproduct() {
    // this.spinner.show();
    try {
      const addproduct: any = await this.Service.addproduct(this.nombre, this.sku, this.precio, this.cantidad, this.vendedor).toPromise();
      let res = addproduct['data'];
      console.log(res);
      if (addproduct['status'] == "Success"){
        this.router.navigate(['/componenteB']);
      }
      
      
      // this.spinner.hide();
    } catch (error) {
      console.log(error);
      // this.spinner.hide();
    }
  }

 




}






