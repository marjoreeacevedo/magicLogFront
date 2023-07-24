
import { Component, OnInit } from '@angular/core';

import { Service } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'new-user-root',
  templateUrl: '../views/new-user.component.html',
  styleUrls: ['../app.component.css']

})
export class newUserComponent {

  title = 'Magic Log Market';
  public mail:any;
  public pass:any;
  public vendedor:any;


  constructor(

    private Service: Service,
    private router: Router


  ) { }
  ngOnInit() {

  }


  async addUser() {
    // this.spinner.show();
    try {
      const adduser: any = await this.Service.addUser(this.mail,this.pass).toPromise();
      let res = adduser['data'];
      console.log(res);
      if (adduser['status'] == "Success"){
        alert("Usuario guardado correctamente");
        this.router.navigate(['/login']);
      }
      // this.getUser();
      
      // this.spinner.hide();
    } catch (error) {
      console.log(error);
      // this.spinner.hide();
    }
  }

  async getUser() {
    // this.spinner.show();
    try {
      const adduser: any = await this.Service.getUser(this.mail, this.pass).toPromise();
      let res = adduser['data'];
      console.log('el nuevo usuario');
      console.log(res);
      // this.spinner.hide();
    } catch (error) {
      console.log(error);
      // this.spinner.hide();
    }
  }




}






