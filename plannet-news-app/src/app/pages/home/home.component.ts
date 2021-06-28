import { Component, OnInit } from '@angular/core';
import { NEWS } from 'src/app/assets/news-data';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeNews: News;

  constructor() { }

  ngOnInit(): void {
    this.homeNews = NEWS.filter((news) => news.important)[0];
  }

}
