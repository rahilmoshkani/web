import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {
  constructor(public translate:TranslateService){
    translate.addLangs(['en','fa']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fa/)? browserLang:'en');
  }




  ngOnInit(){
  }



}
