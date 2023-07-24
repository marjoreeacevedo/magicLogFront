
import { Component, OnInit } from '@angular/core';

import { Service } from '../services/services';
import { Router } from '@angular/router';
import { global } from '../globals';

@Component({
  selector: 'new-user-root',
  templateUrl: '../views/product.component.html',
  styleUrls: ['../app.component.css']

})
export class productComponent {

  title = 'Magic Log Market';
  public nombre:any;
  public sku:any;
  public precio:any;
  public vendedor:any
  public cantidad:any;
  


  constructor(
    private global: global,
    private Service: Service,
    private router: Router


  ) { }
  ngOnInit() {

  }


  async addproduct() {
    // this.spinner.show();
    this.vendedor=this.global.login;
    try {
      const addproduct: any = await this.Service.addproduct(this.nombre, this.sku, this.precio, this.cantidad, this.vendedor).toPromise();
      let res = addproduct['data'];
      console.log(res);
      if (addproduct['status'] == "Success"){
        this.router.navigate(['/producList']);
      }
      
      
      // this.spinner.hide();
    } catch (error) {
      console.log(error);
      // this.spinner.hide();
    }
  }

 




}






