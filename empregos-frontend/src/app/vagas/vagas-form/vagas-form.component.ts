import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VagasService } from '../services/vagas.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-vagas-form',
  templateUrl: './vagas-form.component.html',
  styleUrl: './vagas-form.component.scss'
})
export class VagasFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private vagasService: VagasService
  ){
    this.form = this.formBuilder.group({
      titulo: [null],
      tipo: [null],
    });
  }

  onSalvar() {
    this.vagasService.salvar(this.form.value)
      .subscribe(
        result => console.log(result),
        error => this.onError('Erro ao salvar a vaga.')
      );
  }

  onCancelar() {
    throw new Error('Method not implemented.');
  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
