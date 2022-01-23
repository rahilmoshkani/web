import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { photos } from './textphoto';


@Component({
  selector: 'app-textphoto',
  templateUrl: './textphoto.component.html',
  styleUrls: ['./textphoto.component.scss']
})
export class TextphotoComponent implements OnInit {
  photos=photos;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }

}
