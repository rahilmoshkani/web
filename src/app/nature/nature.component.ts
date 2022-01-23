import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { photos } from './image';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.scss']
})
export class NatureComponent implements OnInit {
photos=photos;
constructor(public translate: TranslateService) {
  translate.addLangs(['en', 'fa']);
  translate.setDefaultLang('en');
  translate.use('en');
}

  ngOnInit(): void {
  }

}
