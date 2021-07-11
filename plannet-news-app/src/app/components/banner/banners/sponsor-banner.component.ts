import { Component, Input } from "@angular/core";

import { BannerInterface } from "../banner";

@Component({
  template: `
    <div class="sponsor-banner">
      <strong>Thanks to {{data.sponsor}}!!</strong>
    </div>
  `
})
export class SponsorBannerComponent implements BannerInterface {
  @Input() data: any;
}