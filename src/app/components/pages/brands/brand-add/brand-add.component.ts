import { ToastrService } from 'ngx-toastr';
import { Brand } from './../../../../models/brand';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { NgForm } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brand: Brand = new Brand();
  constructor(
    private _brandService: BrandService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {}
  add(form: NgForm) {
    const source = timer(1000);
    this._brandService.addBrand(this.brand).subscribe((data) => {
      this._toastrService.success(data.name + ' successfully added.');
      source.subscribe(() => {
        window.location.reload();
      });
    });
  }
}
