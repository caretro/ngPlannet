import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DxFormModule } from "devextreme-angular/ui/form";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ConfirmUpdateGuard } from "src/app/guards/confirm-update.guard";

import { AdminComponent } from "./admin.component";

const routes: Routes = [
  { path: "", component: AdminComponent, canActivate: [AuthGuard], canDeactivate: [ConfirmUpdateGuard] }
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    DxFormModule
  ],
  providers: [AuthGuard, ConfirmUpdateGuard]
})
export class AdminModule { }
