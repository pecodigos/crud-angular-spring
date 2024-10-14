import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ],

})
export class AppMaterialModule { }
