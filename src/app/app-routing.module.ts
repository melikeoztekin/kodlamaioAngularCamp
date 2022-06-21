import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { CarsComponent } from './components/pages/cars/cars.component';
import { CarAddComponent } from './components/pages/cars/car-add/car-add.component';
import { CarUpdateComponent } from './components/pages/cars/car-update/car-update.component';
import { CarDetailsComponent } from './components/pages/car-details/car-details.component';
import { BrandsComponent } from './components/pages/brands/brands.component';
import { BrandAddComponent } from './components/pages/brands/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/pages/brands/brand-update/brand-update.component';
import { ColorsComponent } from './components/pages/colors/colors.component';
import { ColorAddComponent } from './components/pages/colors/color-add/color-add.component';
import { ColorUpdateComponent } from './components/pages/colors/color-update/color-update.component';
import { AdditionalServicesComponent } from './components/pages/additional-services/additional-services.component';
import { AdditionalServiceAddComponent } from './components/pages/additional-services/additional-service-add/additional-service-add.component';
import { AdditionalServiceUpdateComponent } from './components/pages/additional-services/additional-service-update/additional-service-update.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginGuard } from './guard/login.guard';
import { CanExitGuard } from './guard/can-exit.guard';
import { ReservationComponent } from './components/pages/reservation/reservation.component';

const routes: Routes = [
  //canActive olayı admin güvenliğini sağlamak için eğer login işlemi yapılmamış ise add ve update işlemlerine gitmeyi engelle
  { path: '', pathMatch: 'full', component: CarsComponent },
  { path: 'cars', component: CarsComponent },
  {
    path: 'carAdd',
    component: CarAddComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  {
    path: 'carUpdate/:id',
    component: CarUpdateComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  { path: 'carDetail/:id', component: CarDetailsComponent },
  { path: 'colors/:id', component: CarsComponent }, // renge göre araç getir
  { path: 'brands/:id', component: CarsComponent }, // markaya göre araç getir
  { path: 'brands', component: BrandsComponent },
  {
    path: 'brandAdd',
    component: BrandAddComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  {
    path: 'brandUpdate/:id',
    component: BrandUpdateComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  { path: 'colors', component: ColorsComponent },
  {
    path: 'colorAdd',
    component: ColorAddComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  {
    path: 'colorUpdate/:id',
    component: ColorUpdateComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  { path: 'additionalServices', component: AdditionalServicesComponent },
  {
    path: 'additionalServiceAdd',
    component: AdditionalServiceAddComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  {
    path: 'additionalServiceUpdate/:id',
    component: AdditionalServiceUpdateComponent,
    canActivate: [LoginGuard],
    canDeactivate: [CanExitGuard],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'reservation', component: ReservationComponent },
  //{ path: 'login/:returnUrl', component: LoginPageComponent },
  { path: '**', component: ErrorPageComponent }, //bulamadığı tüm adresler için 404 ekranını göster
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
