import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasComponent } from './containers/vagas/vagas.component';
import { VagasFormComponent } from './containers/vagas-form/vagas-form.component';

const routes: Routes = [
  { path: '', component: VagasComponent},
  { path: 'new', component: VagasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
