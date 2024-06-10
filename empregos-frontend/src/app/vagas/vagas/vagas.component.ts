import { VagasService } from './../services/vagas.service';
import { Component } from '@angular/core';
import { Vaga } from '../model/vagas';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.scss'
})
export class VagasComponent {
  vagas$: Observable<Vaga[]>;
  displayedColumns = ['titulo','tipo'];

  constructor(
      private VagasService: VagasService,
      public dialog: MatDialog
    )
  {
    this.vagas$ = this.VagasService
      .list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar as vagas.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
