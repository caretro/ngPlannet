import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    NewsWidgetComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsWidgetComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
