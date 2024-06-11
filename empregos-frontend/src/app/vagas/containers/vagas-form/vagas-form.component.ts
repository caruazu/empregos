import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { VagasService } from '../../services/vagas.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { Vaga } from '../../model/vagas';

@Component({
  selector: 'app-vagas-form',
  templateUrl: './vagas-form.component.html',
  styleUrl: './vagas-form.component.scss'
})
export class VagasFormComponent {

  form = this.formBuilder.group({
    _id: [''],
    titulo: [''],
    tipo: [''],
    descricao: [''],
  });

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private vagasService: VagasService
  ){}

  ngOnInit(){
    const vagaSelecionada: Vaga = this.route.snapshot.data['vaga'];


    this.form.setValue({
      _id: vagaSelecionada._id,
      titulo: vagaSelecionada.titulo,
      tipo: vagaSelecionada.tipo,
      descricao: vagaSelecionada.descricao
      });

    console.log(vagaSelecionada)
}

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
