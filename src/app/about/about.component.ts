import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public translate:TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
    translate.use('en');

  }

  ngOnInit(): void {
  }

}
