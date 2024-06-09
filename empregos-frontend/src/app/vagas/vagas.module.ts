import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasComponent } from './vagas/vagas.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    VagasComponent
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    AppMaterialModule
  ]
})
export class VagasModule { }
