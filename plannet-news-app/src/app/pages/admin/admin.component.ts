import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NEWS } from "src/app/assets/news-data";
import { News } from "src/app/models/news";

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
    author: "",
    // category: 
  };

  publishDateOptions = { disabled: true };

  submitButtonOptions = {
    text: "Salva",
    useSubmitBehavior: true
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.news.unshift(this.newNews as News);
  }
}
