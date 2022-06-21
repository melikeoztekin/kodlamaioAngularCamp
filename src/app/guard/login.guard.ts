import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private _loginService: LoginService,
    private _toastrService: ToastrService,
    private _router: Router
  ) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._loginService.isAuthenticated()) {
      return true;
    } else {
      // this._router.navigateByUrl('login/' + this._router.url);
      this._router.navigateByUrl('login');
      this._toastrService.info('You have to login!');
      return false;
    }
  }
}
