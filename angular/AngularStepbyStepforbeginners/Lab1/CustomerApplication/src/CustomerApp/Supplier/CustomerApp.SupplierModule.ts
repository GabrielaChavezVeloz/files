import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import {SupplierRoutes} from "../Routing/CustomerApp.SupplierRouting";

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
