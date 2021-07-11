import { Component, OnInit } from '@angular/core';
import { NEWS, NEWS_CATEGORIES, NEWS_SCHEMA } from 'src/app/assets/news-data';
import { News, NewsSchema } from 'src/app/models/news';
import { PreloadService } from 'src/app/services/preload.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: News[] = NEWS;
  public newsSchema: NewsSchema[] = NEWS_SCHEMA.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
  public categories = {
    store: {
      type: 'array',
      data: NEWS_CATEGORIES,
      key: "key"
    }
  };

  constructor(private preloadService: PreloadService) { }

  ngOnInit(): void {
  }

  getLookup(key: string) {
    // TODO: use key to get correct lookup from server
    return this.categories;
  }
}
