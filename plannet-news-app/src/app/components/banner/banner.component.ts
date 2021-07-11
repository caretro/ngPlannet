import { AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from "@angular/core";

import { BannerInterface, BannerItem } from "./banner";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {
  @Input() banners: BannerItem[] = [];
  @ViewChild("bannerContainer", { read: ViewContainerRef }) bannerContainer: ViewContainerRef;

  currentBannerIndex = -1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  ngAfterViewInit(): void {
    this.loadBannerComponent();
    this.setBanner();
  }

  loadBannerComponent() {
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    const currentBanner = this.banners[this.currentBannerIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentBanner.component);
    this.bannerContainer.clear();
    const componentRef = this.bannerContainer.createComponent<BannerInterface>(componentFactory);
    componentRef.instance.data = currentBanner.data;
  }

  setBanner() {
    setInterval(() => {
      this.loadBannerComponent();
    }, 3000);
  }
}
