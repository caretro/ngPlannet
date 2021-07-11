import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DxDataGridModule } from "devextreme-angular/ui/data-grid";

import { NewsComponent } from "./news.component";

const routes: Routes = [
  { path: "", component: NewsComponent }
];

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxDataGridModule
  ]
})
export class NewsModule { }
