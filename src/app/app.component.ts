import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
   constructor(translate: TranslateService) {

      translate.addLangs(["en", "th"]);
      translate.setDefaultLang('en');

      let browserLang: string = translate.getBrowserLang();
      translate.use(browserLang.match(/en|th/) ? browserLang : 'en');
    }
}
