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
import { TextphotoComponent } from './textphoto/textphoto.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FirstpageComponent,
    PortfolioComponent,
    BlogComponent,
    CookingComponent,
    NatureComponent,
    TextphotoComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//AOT compilation support
export function httpTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http);

}
