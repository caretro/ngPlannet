import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { MenuComponent } from './menu/menu.component';
import { NullablePipe } from '../pipes/nullable.pipe';
import { HighlightDirective } from '../directives/highlight.directive';
import { BannerModule } from './banner/banner.module';



@NgModule({
  declarations: [
    NewsWidgetComponent,
    MenuComponent,
    NullablePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    BannerModule
  ],
  exports: [
    NewsWidgetComponent,
    MenuComponent,
  ]
})
export class ComponentsModule { }
