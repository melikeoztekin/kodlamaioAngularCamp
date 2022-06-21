import { User } from 'src/app/models/user';
import { LoginService } from './../../../services/login.service';
import { BrandService } from './../../../services/brand.service';
import { Brand } from './../../../models/brand';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands: Brand[];
  deleteId = 0;
  constructor(
    private _brandService: BrandService,
    private _modalService: NgbModal,
    private _toastrService: ToastrService,
    private _loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getBrand();
  }
  getBrand() {
    this._brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }
  deleteBrandById(brandId: number) {
    const source = timer(1000);
    this._brandService.deleteBrand(brandId).subscribe((response) => {
      this.getBrand();
      this._toastrService.error('Brand information deleted successfully.');
      source.subscribe(() => {
        window.location.reload();
      });
    });
  }

  open(content, deleteId) {
    this.deleteId = deleteId;
    this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
