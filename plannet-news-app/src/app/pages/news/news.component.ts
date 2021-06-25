import { Component, OnInit } from '@angular/core';
import { NEWS } from 'src/app/assets/news-data';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  public news: News[] = NEWS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
