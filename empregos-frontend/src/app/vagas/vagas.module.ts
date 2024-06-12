import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VagasComponent } from './containers/vagas/vagas.component';
import { VagasRoutingModule } from './vagas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VagasListComponent } from './components/vagas-list/vagas-list.component';
import { VagasFormComponent } from './containers/vagas-form/vagas-form.component';

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
