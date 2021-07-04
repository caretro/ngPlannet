import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

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
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService, ProfileService, AuthGuard, ConfirmUpdateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
