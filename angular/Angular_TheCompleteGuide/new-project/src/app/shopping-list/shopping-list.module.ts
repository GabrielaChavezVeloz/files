import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { SharedModule } from "../shared/shared.module";
import { LogginService } from "../loggin.service";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ], 
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ]),
        SharedModule
    ],
    providers: [LogginService]
})
export class ShoppingListModule {

}