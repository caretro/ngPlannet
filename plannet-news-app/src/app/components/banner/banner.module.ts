import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { SponsorBannerComponent } from './banners/sponsor-banner.component';
import { Euro2020BannerComponent } from './banners/euro2020-banner.component';
import { BannerService } from './banner.service';

@NgModule({
  declarations: [
    BannerComponent,
    SponsorBannerComponent,
    Euro2020BannerComponent
  ],
  imports: [
    CommonModule
  ],
  // entryComponents: [Euro2020BannerComponent, SponsorBannerComponent],
  providers: [BannerService],
  exports: [BannerComponent]
})
export class BannerModule { }
