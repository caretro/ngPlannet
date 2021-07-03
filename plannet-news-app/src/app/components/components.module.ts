import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { MenuComponent } from './menu/menu.component';
import { NullablePipe } from '../pipes/nullable.pipe';



@NgModule({
  declarations: [
    NewsWidgetComponent,
    MenuComponent,
    NullablePipe
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
