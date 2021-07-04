import { Component, OnInit } from '@angular/core';
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

  constructor(
    public appService: AppService,
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    // this.profileService.getProfile()
    //   .subscribe(data => {
    //     this.user = data.user;
    //   })
    this.profileService.getProfileSubject();
  }
}
