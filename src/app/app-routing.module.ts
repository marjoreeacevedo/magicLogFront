import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { newUserComponent } from './components/new-user.component';

const routes: Routes = [{ path: "", component: newUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


