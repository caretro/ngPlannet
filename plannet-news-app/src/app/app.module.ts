import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { AdminComponent } from "./pages/admin/admin.component";
import { HomeComponent } from "./pages/home/home.component";
import { NewsComponent } from "./pages/news/news.component";
import { AppService } from "./services/app.service";

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
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
