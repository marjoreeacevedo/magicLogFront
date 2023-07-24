import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './components/login.component';
import { newUserComponent } from './components/new-user.component';
import { productComponent } from './components/product.component';
import { productListComponent } from './components/productList.component';
import { global } from './globals';



@NgModule({
  declarations: [
    AppComponent, loginComponent, newUserComponent, productComponent, productListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  
   
  ],
  providers: [global],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
