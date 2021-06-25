import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsWidgetComponent } from './news-widget/news-widget.component';



@NgModule({
  declarations: [NewsWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NewsWidgetComponent
  ]
})
export class ComponentsModule { }
