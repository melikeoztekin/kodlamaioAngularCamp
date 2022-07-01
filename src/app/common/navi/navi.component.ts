import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(
    private _toastrService: ToastrService,
    public _translateService: TranslateService
  ) {
    _translateService.addLangs(['en', 'tr']);
    _translateService.setDefaultLang('en');
  }
  translateLanguageTo(lang: string) {
    this._translateService.use(lang);
  }

  ngOnInit(): void {}
  logOut() {
    localStorage.clear();
    this._toastrService.error('Logged out!');
    location.reload();
  }
}
