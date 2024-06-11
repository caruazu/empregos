import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasComponent } from './containers/vagas/vagas.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VagasFormComponent } from './containers/vagas-form/vagas-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VagasListComponent } from './components/vagas-list/vagas-list.component';

@NgModule({
  declarations: [
    VagasComponent,
    VagasFormComponent,
    VagasListComponent
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
