import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Vaga } from '../../model/vagas';
import { VagasService } from '../../services/vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.scss'
})
export class VagasComponent {

  vagas$: Observable<Vaga[]>;

  constructor(
      private VagasService: VagasService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute
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

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(
      ['new'],
      { relativeTo: this.route }
    );
  }

  onEdit(vagaSelecionada: Vaga){
    this.router.navigate(
      ['edit',vagaSelecionada._id],
      { relativeTo: this.route }
    )
  }

}
