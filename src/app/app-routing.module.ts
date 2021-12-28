import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/firstpage',pathMatch:'full'},
  {path:'firstpage',component:FirstpageComponent},
  {path:'About',component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
