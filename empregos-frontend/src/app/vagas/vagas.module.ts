import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasComponent } from './vagas/vagas.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VagasFormComponent } from './vagas-form/vagas-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VagasComponent,
    VagasFormComponent
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VagasModule { }
