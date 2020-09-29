import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieBannerResponse } from '../cookie-banner/cookie-banner.interface';

@Injectable({
  providedIn: 'root'
})
export class CookieBannerService {

  constructor(private httpClient: HttpClient) { }

  getBannerDetails() {
    return this.httpClient.get<HttpResponse<CookieBannerResponse>>('https://fast-lowlands-95849.herokuapp.com/api/common/getBanner', {observe: 'response'});
  }
}
