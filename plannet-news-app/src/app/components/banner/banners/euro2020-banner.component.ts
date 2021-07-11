import { Component, Input } from "@angular/core";

import { BannerInterface } from "../banner";

@Component({
  template: `
    <div class="euro2020-banner">
      <h4>{{data.nextMatch}}</h4>
      <p>{{data.date | date:'EEEE dd/MM/yyyy HH:mm'}}</p>
      <p>{{data.body}}</p>
    </div>
  `
})
export class Euro2020BannerComponent implements BannerInterface {
  @Input() data: any;
}