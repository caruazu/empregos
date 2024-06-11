import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasComponent } from './containers/vagas/vagas.component';
import { VagasFormComponent } from './containers/vagas-form/vagas-form.component';
import { VagaResolver } from './guards/vaga.resolver';

const routes: Routes = [
  { path: '', component: VagasComponent},
  { path: 'new', component: VagasFormComponent, resolve: { vaga: VagaResolver }},
  { path: 'edit/:_id', component: VagasFormComponent,  resolve: { vaga: VagaResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
