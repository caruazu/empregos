import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { VagasService } from '../../services/vagas.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vagas-form',
  templateUrl: './vagas-form.component.html',
  styleUrl: './vagas-form.component.scss'
})
export class VagasFormComponent {

  form = this.formBuilder.group({
    titulo: [''],
    tipo: ['']
  });

  constructor(
    private router: Router,
    private formBuilder: NonNullableFormBuilder,
    public dialog: MatDialog,
    private vagasService: VagasService
  ){}

  onSalvar() {
    this.vagasService.salvar(this.form.value).subscribe({
      next: (v) => this.router.navigate(['']),
      error: (e) => this.onError('Erro ao salvar a vaga.')
  })}

  onCancelar() {
    this.router.navigate([''])
  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
