import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule
    ],
    exports: [
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule
    ]
})
export class MaterialModule {

}