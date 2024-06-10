import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { TipoPipe } from './pipes/tipo.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    TipoPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    TipoPipe
  ]
})
export class SharedModule { }
