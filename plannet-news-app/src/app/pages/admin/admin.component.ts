import { Component, OnInit } from '@angular/core';
import { NEWS } from 'src/app/assets/news-data';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  news: News = NEWS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
