import { VagasService } from './../services/vagas.service';
import { Component } from '@angular/core';
import { Vaga } from '../model/vagas';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.scss'
})
export class VagasComponent {
  vagas: Observable<Vaga[]>;
  displayedColumns = ['titulo','tipo','descricao'];

  constructor(private VagasService: VagasService){
    this.vagas = this.VagasService.list();
  }
}
