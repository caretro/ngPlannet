import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NEWS, NEWS_CATEGORIES } from "src/app/assets/news-data";
import { KeyText, News } from "src/app/models/news";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  @Input() title: string;
  @Output() titleChange = new EventEmitter<string>();

  news: News[] = NEWS;
  form: any;

  newNews: News = {
    title: "",
    description: "",
    important: false,
    publishDate: new Date(),
    author: ""
  };

  publishDateOptions = { disabled: true };

  submitButtonOptions = {
    text: "Salva",
    useSubmitBehavior: true
  }

  categories: KeyText[] = NEWS_CATEGORIES;

  onSubmit(e: any) {
    e.preventDefault();
    this.news.unshift(this.newNews as News);
  }
}
