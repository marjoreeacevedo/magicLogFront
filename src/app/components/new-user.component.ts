
import { Component, OnInit } from '@angular/core';

import { Service } from '../services/services';

@Component({
  selector: 'new-user-root',
  templateUrl: '../views/new-user.component.html',
  styleUrls: ['../app.component.css']
})
export class newUserComponent {

  title = 'Magic Log Market';

  constructor(

    private Service: Service,


  ) { }
  ngOnInit() {

  }


  async addUser() {
    // this.spinner.show();
    try {
      const adduser: any = await this.Service.addUser('marjorie_ja@hotmail.com','1234').toPromise();
      let res = adduser['data'];
      console.log(res);
      // this.spinner.hide();
    } catch (error) {
      console.log(error);
      // this.spinner.hide();
    }
  }




}






