import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseraddComponent } from './useradd/useradd.component';

const routes: Routes = [
  {
    path:'add-user',
    component:UseraddComponent
  }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
