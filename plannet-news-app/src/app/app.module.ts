import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { DxButtonModule } from "devextreme-angular/ui/button";
import { DxDataGridModule } from "devextreme-angular/ui/data-grid";
import { DxFormModule } from "devextreme-angular/ui/form";

import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { AuthGuard } from "./guards/auth.guard";
import { ConfirmUpdateGuard } from "./guards/confirm-update.guard";
import { AdminComponent } from "./pages/admin/admin.component";
import { HomeComponent } from "./pages/home/home.component";
import { NewsComponent } from "./pages/news/news.component";
import { AppService } from "./services/app.service";
import { ProfileService } from "./services/profile.service";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard], canDeactivate: [ConfirmUpdateGuard] },
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    DxFormModule,
    DxButtonModule,
    DxDataGridModule
  ],
  providers: [AppService, ProfileService, AuthGuard, ConfirmUpdateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
