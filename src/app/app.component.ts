import { Component, TRANSLATIONS } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  textDir:string='ltr';



  constructor(public translate:TranslateService){
    this.translate.onLangChange.subscribe((event:LangChangeEvent)=>
    {
      if(event.lang=='fa')
      {
        this.textDir='rtl';
      }
      else
      {
        this.textDir='ltr';
      }
    }
    );
  }


  ngOnInit(){}

}
