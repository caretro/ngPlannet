import { Injectable } from '@angular/core';
import { BannerItem } from './banner';
import { Euro2020BannerComponent } from './banners/euro2020-banner.component';
import { SponsorBannerComponent } from './banners/sponsor-banner.component';


@Injectable()
export class BannerService {
  getBanners() {
    return [
      new BannerItem(SponsorBannerComponent, {sponsor: 'Coke'}),
      new BannerItem(SponsorBannerComponent, {sponsor: 'Beer'}),
      new BannerItem(Euro2020BannerComponent, {nextMatch: 'Inghilterra - Italia', date: new Date(2021, 6, 11, 21, 0), body: 'La finale!!'}),
    ];
  }
}