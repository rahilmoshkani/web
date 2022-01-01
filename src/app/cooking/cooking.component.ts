import { Component, OnInit } from '@angular/core';
import { Photos} from './imgcooking';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss']
})
export class CookingComponent implements OnInit {
  photos=Photos;

  constructor() { }

  ngOnInit(): void {
  }

}
