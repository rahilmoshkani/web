import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
})
export class FirstpageComponent implements OnInit {



  constructor(public translate: TranslateService,rootRenderer:RendererFactory2) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
    translate.use('en');


  }




  ngOnInit() {}
}
