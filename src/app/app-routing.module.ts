import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { newUserComponent } from './components/new-user.component';
import { productComponent } from './components/product.component';
import { productListComponent } from './components/productList.component';
import { loginComponent } from './components/login.component';

const routes: Routes = [{ path: "", component: newUserComponent },
{ path: "product", component: productComponent },
 { path: "login", component: loginComponent },
  { path: "productlist", component: productListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


