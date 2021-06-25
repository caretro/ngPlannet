import { Component, Input } from "@angular/core";
import { News } from "src/app/models/news";

@Component({
    selector: 'app-news-widget',
    templateUrl: './news-widget.component.html'
})
export class NewsWidgetComponent {
    @Input() news: News;
}