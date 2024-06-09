import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasComponent } from './vagas/vagas.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    VagasComponent
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    MatTableModule
  ]
})
export class VagasModule { }
