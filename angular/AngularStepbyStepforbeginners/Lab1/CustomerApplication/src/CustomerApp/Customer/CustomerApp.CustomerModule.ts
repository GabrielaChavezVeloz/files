import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { GridComponent } from '../Utility/CustomerApp.GridComponent'
import {CustomerRoutes} from "../Routing/CustomerApp.CustomerRouting";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor'

@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi:true}
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
