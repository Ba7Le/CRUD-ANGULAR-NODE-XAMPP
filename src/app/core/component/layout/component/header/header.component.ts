import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from 'src/app/core/constants/common.constant';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  langArray: string[] = LANGUAGES;
  currentLanguage: string = 'EN';

  constructor(
    private translateService: TranslateService,
    public dialog: MatDialog
  ) { }

  switchLanguage(lang: string) {
    this.translateService.use(lang); // Switch the language dynamically
  }

  changeLang(lang: string) {
    this.currentLanguage = lang;
    this.switchLanguage(lang.toLowerCase());
  }

  openSingupDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
