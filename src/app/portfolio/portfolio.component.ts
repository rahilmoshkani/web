import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {



  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
    translate.use('en');


  }

  ngOnInit(): void {


  }

}
