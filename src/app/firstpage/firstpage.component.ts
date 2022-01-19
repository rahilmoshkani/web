import { Component, OnInit } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {
  textDir:string='ltr';
  constructor(public translate:TranslateService,@Inject(Document) private document:Document){


  }




  ngOnInit(){
  }



}
