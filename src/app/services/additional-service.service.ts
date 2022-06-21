import { AdditionalService } from './../models/additionalService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdditionalServiceService {
  constructor(private _httpClient: HttpClient) {}
  getAdditionalServices(): Observable<AdditionalService[]> {
    return this._httpClient.get<AdditionalService[]>(
      'http://localhost:3000/additionalServices'
    );
  }
  addAdditionalService(
    additionalService: AdditionalService
  ): Observable<AdditionalService> {
    return this._httpClient.post<AdditionalService>(
      'http://localhost:3000/additionalServices',
      additionalService
    );
  }
  deleteAdditionalService(
    additionalServiceId: number
  ): Observable<AdditionalService> {
    return this._httpClient.delete<AdditionalService>(
      'http://localhost:3000/additionalServices/' + additionalServiceId
    );
  }
  updateAdditionalService(
    additionalService: AdditionalService
  ): Observable<AdditionalService> {
    return this._httpClient.put<AdditionalService>(
      'http://localhost:3000/additionalServices/' + additionalService.id,
      additionalService
    );
  }
  getAdditionalServiceById(
    additionalServiceId: number
  ): Observable<AdditionalService> {
    return this._httpClient.get<AdditionalService>(
      'http://localhost:3000/additionalServices/' + additionalServiceId
    );
  }
}
