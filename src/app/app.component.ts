import { Component } from '@angular/core';
import { global } from './globals';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Magic Log Market';
  public user:any;
  public login:any;
  public enable:any;
  constructor(

    private global: global,
     private router: Router

  ) { }

  ngOnInit() {
    this.login=this.global.login;
    this.user=this.global.user;

  }

  verificar(ruta:any){
    console.log(this.global.login);
    console.log(ruta);
    if(this.global.login==true){
      this.router.navigate(['/'+ruta]);
    }else{
      alert("Debe iniciar sesión antes de continuar");
      this.router.navigate(['/login']);
    }
  }


}
