import { TextphotoComponent } from './textphoto/textphoto.component';
import { NatureComponent } from './nature/nature.component';
import { CookingComponent } from './cooking/cooking.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/firstpage',pathMatch:'full'},
  {path:'firstpage',component:FirstpageComponent},
  {path:'About',component:AboutComponent},
 {path:'portfolio',component:PortfolioComponent},
 {path:'blog',component:BlogComponent},
 {path:'cooking',component:CookingComponent},
 {path:'nature',component:NatureComponent},
 {path:'textphoto',component:TextphotoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
