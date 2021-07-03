import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plannet-news-app';
  activePage = "home";

  constructor(
    public appService: AppService
  ){ }
}
