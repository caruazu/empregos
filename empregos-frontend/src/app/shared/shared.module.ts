import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { TipoPipe } from './pipes/tipo.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    TipoPipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    TipoPipe,
    ConfirmDialogComponent
  ]
})

export class SharedModule { }
