import { ToastrService } from 'ngx-toastr';
import { AdditionalServiceService } from './../../../../services/additional-service.service';
import { AdditionalService } from './../../../../models/additionalService';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-additional-service-add',
  templateUrl: './additional-service-add.component.html',
  styleUrls: ['./additional-service-add.component.css'],
})
export class AdditionalServiceAddComponent implements OnInit {
  additionalService: AdditionalService = new AdditionalService();
  constructor(
    private _additionalServiceService: AdditionalServiceService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {}
  add(form: NgForm) {
    const source = timer(1000);
    console.log(form.value);
    this._additionalServiceService
      .addAdditionalService(this.additionalService)
      .subscribe((data) => {
        this._toastrService.success(data.additional + ' successfully added.');
        source.subscribe(() => {
          window.location.reload();
        });
      });
  }
}
