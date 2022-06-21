import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);
      this._loginService.login(this.user).subscribe((data) => {
        if (data.length > 0) {
          let chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let str = '';
          for (let i = 0; i < 88; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          // farklı adreslere yönlendirme yapmak için kullanılacak
          // this._activatedRoute.params.subscribe((param) => {
          //   if (param['returnUrl']) {
          //     this._router.navigateByUrl('/' + param['returnUrl']);
          //   } else {
          //     this._router.navigateByUrl('');
          //   }
          // });
          this._router.navigateByUrl('/');
          localStorage.setItem('token', str);
          this._toastrService.info('Giriş Başarılı');
        } else {
          this._toastrService.error('Email veya parola hatalı');
        }
      });
    }
  }
}
