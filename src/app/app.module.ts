import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { CookingComponent } from './cooking/cooking.component';
import { NatureComponent } from './nature/nature.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FirstpageComponent,
    PortfolioComponent,
    BlogComponent,
    CookingComponent,
    NatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
