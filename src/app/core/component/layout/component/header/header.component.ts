import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from 'src/app/core/constants/common.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  langArray: string[] = LANGUAGES;
  currentLanguage: string = 'EN';

  constructor(private translateService: TranslateService) { }

  switchLanguage(lang: string) {
    this.translateService.use(lang); // Switch the language dynamically
  }

  changeLang(lang: string) {
    this.currentLanguage = lang;
    this.switchLanguage(lang.toLowerCase());
  }
}
