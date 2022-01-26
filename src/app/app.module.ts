import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import {
  TranslateModule,
  TranslateLoader,
  TranslateCompiler,
  TranslateParser,
  MissingTranslationHandler,
} from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { forkJoin, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {catchError}from'rxjs/operators';

export function initApp(http: HttpClient, translate: TranslateService) {
  return () =>
    new Promise<boolean>((resolve: (res: boolean) => void) => {
      const defaultLocale = 'en';
      const translationsUrl='/assets/i18n/translations';
      const sufix='.json';
      const storageLocale=localStorage.getItem('locale');
      const locale=storageLocale||defaultLocale;
      forkJoin([
        http.get(`/assets/i18n/dev.json`).pipe(
          catchError(()=>of(null))
        ),
        http.get(`${translationsUrl}/${locale}${sufix}`).pipe(
          catchError(()=>of(null))
        )
      ]).subscribe((response:any[])=>{
        const devKeys=response[0];
        const translatedKeys=response[1];

        translate.setTranslation(defaultLocale,devKeys||{});
        translate.setTranslation(locale,translatedKeys||{},true);

        translate.setDefaultLang(defaultLocale);
        translate.use(locale);
        resolve(true);
      });

        });
      }

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
    TranslateModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [HttpClient, TranslateService],
      multi: true
     }],
  bootstrap: [
    AppComponent,
    AboutComponent,
    FirstpageComponent,
    PortfolioComponent,
    BlogComponent,
    CookingComponent,
    NatureComponent,
    TextphotoComponent,
    ContactComponent


  ],
})
export class AppModule {}


