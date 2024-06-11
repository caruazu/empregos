import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasComponent } from './vagas/vagas.component';
import { VagasFormComponent } from './vagas-form/vagas-form.component';

const routes: Routes = [
  { path: '', component: VagasComponent},
  { path: 'new', component: VagasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
