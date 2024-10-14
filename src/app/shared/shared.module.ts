import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { GenrePipe } from './pipes/genre.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    GenrePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    GenrePipe
  ]
})
export class SharedModule { }
