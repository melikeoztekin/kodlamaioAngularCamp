import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private _toastrService: ToastrService) {}

  ngOnInit(): void {}
  logOut() {
    localStorage.clear();
    this._toastrService.error('Logged out!');
    location.reload();
  }
}
