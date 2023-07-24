
import { Component, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';

import { Service } from '../services/services';
import { Router } from '@angular/router';
import { global } from '../globals';

@Component({
  selector: 'login-root',
  templateUrl: '../views/login.component.html',
  styleUrls: ['../app.component.css']

})
export class loginComponent {

  title = 'Magic Log Market';
   mail:any='';
   pass:any;
   vendedor:any;


  constructor(

    private Service: Service,
    private router: Router,
    private global:global


  ) { }
  ngOnInit() {

  }


 

  async getUser() {
    // this.spinner.show();
    try {
      console.log(this.mail);
      const getuser: any = await this.Service.getUser(this.mail,this.pass).toPromise();
      let res = getuser['data'];
      console.log(res.length);
      if (getuser['status'] == "Success" && res.length>0){
        this.router.navigate(['/product']);
        this.global.user=this.mail;
        this.global.login=true;
      }else{
        alert("Usuario no encontrado!, debe crear cuenta");
        this.router.navigate(['/']);
        this.global.login=false;
        this.global.user=null;
      }
     
      // this.spinner.hide();
    } catch (error) {
      console.log(error);
      // this.spinner.hide();
    }
  }




}






