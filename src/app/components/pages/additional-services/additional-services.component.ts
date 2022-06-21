import { CartService } from './../../../services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdditionalServiceService } from './../../../services/additional-service.service';
import { AdditionalService } from './../../../models/additionalService';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.css'],
})
export class AdditionalServicesComponent implements OnInit {
  additionalServices: AdditionalService[];
  deleteId: 0;
  constructor(
    private _additionalServiceService: AdditionalServiceService,
    private _toastrService: ToastrService,
    private _modalService: NgbModal,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getAdditionalService();
  }
  getAdditionalService() {
    this._additionalServiceService.getAdditionalServices().subscribe((data) => {
      this.additionalServices = data;
    });
  }
  deleteAdditionalServiceById(additionalServiceId: number) {
    const source = timer(1000);
    this._additionalServiceService
      .deleteAdditionalService(additionalServiceId)
      .subscribe((response) => {
        this.getAdditionalService();
        this._toastrService.error(
          'The additional service was successfully deleted.'
        );
        source.subscribe(() => {
          window.location.reload();
        });
      });
  }

  open(content, deleteId) {
    this.deleteId = deleteId;
    this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  addToCart2(additionalService: AdditionalService) {
    this._cartService.addToCart2(additionalService);
    this._toastrService.success('sepete eklendi');
  }
}
