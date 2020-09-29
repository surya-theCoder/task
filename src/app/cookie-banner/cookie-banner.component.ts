import { Component, OnInit } from '@angular/core';
import { CookieBannerService } from '../services/cookie-banner.service';
import { Accordian, CookieBannerResponse } from './cookie-banner.interface';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {

  constructor(private cookieBannerService: CookieBannerService) { }

  accordians: Accordian[] = [];
  showAccordions = false;

  ngOnInit(): void {
    this.getBannerDetails();
  }

  getBannerDetails() {
    this.cookieBannerService.getBannerDetails().subscribe(
      (res) => {
        if(res.status === 200) {
          this.accordians = (res['body'] && res['body']['accordian']) || [];
        }
      },
      (err) => console.log(`Error :::: ${err}`)
    )
  }

}
