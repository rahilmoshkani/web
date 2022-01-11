import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  user!:{firstName:string;lastName:string;};
  welcome!:string;
  usernameLable!:string;
  passwordLable!:string;

  constructor(public translate:TranslateService){
    translate.addLangs(['en','fa']);
    translate.setDefaultLang('en');
    translate.use('en');
  }


  ngOnInit(){
    //hardcoded example
    this.user={firstName:'Sammy',lastName:'Shark'};

    //synchronous.Also interpolate the 'firstName' parameter with a value.
    this.welcome=this.translate.instant('welcomeMessage',{firstName:this.user.firstName});

    //asynchronous - gets translation then completes.
    this.translate.get(['login.username','login.password'])
    .subscribe(translations=>{
      this.usernameLable=translations['login.username'];
      this.passwordLable=translations['login.password'];

    });

  }



}
