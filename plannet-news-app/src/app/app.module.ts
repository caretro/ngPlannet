import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { AppService } from "./services/app.service";
import { ProfileService } from "./services/profile.service";

const routes: Routes = [
  { path: "home", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
  { path: "news", loadChildren: () => import("./pages/news/news.module").then(m => m.NewsModule) },
  { path: "admin", loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule) },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
