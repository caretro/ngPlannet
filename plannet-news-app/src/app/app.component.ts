import { Component, OnInit } from '@angular/core';
import { BannerItem } from './components/banner/banner';
import { BannerService } from './components/banner/banner.service';
import { Profile } from './models/profile';
import { AppService } from './services/app.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'plannet-news-app';
  activePage = "home";
  // user: string;
  banners: BannerItem[] = [];

  constructor(
    public appService: AppService,
    public profileService: ProfileService,
    private bannerService: BannerService
  ) { }

  ngOnInit() {
    // this.profileService.getProfile()
    //   .subscribe(data => {
    //     this.user = data.user;
    //   })
    this.profileService.getProfileSubject();
    this.banners = this.bannerService.getBanners();    
  }
}
