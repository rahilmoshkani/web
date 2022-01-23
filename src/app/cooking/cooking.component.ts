import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Photos} from './imgcooking';


@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss']
})
export class CookingComponent implements OnInit {
  photos=Photos;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
    translate.use('en');

  }
  ngOnInit(): void {
  }

}
