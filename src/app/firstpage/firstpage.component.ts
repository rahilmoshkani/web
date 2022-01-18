import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss','./firstpage.en.css','./firstpage.fa.css']
})
export class FirstpageComponent implements OnInit {
  constructor(public translate:TranslateService,@Inject(Document) private document:Document){
    translate.addLangs(['en','fa']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fa/)? browserLang:'en');
  }
  changeLangage(lang:string){
    let htmlTag=this.document.getElementsByName('html')[0]as HTMLHtmlElement;
    htmlTag.dir=lang==='fa'?'rtl':'ltr';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.changeCssFile(lang);

  }
  changeCssFile(lang:string){
    let headTag=this.document.getElementsByTagName('head')[0] as HTMLHtmlElement;

    let existingLink=this.document.getElementById('langCss') as HTMLLinkElement;

    let bundleName=lang==="fa"?
    'farsiStyle.css':'englishStyle.css';

    if(existingLink){
      existingLink.href=bundleName;
    }else{
      let newLink=this.document.createElement('link');
      newLink.rel='stylesheet';
      newLink.type='text/css';
      newLink.id='langCss';
      newLink.href=bundleName;
      headTag.appendChild(newLink);
    }
  }




  ngOnInit(){
  }



}
