import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DxButtonModule } from "devextreme-angular/ui/button";
import { ComponentsModule } from "src/app/components/components.module";

import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    DxButtonModule
  ]
})
export class HomeModule { }
