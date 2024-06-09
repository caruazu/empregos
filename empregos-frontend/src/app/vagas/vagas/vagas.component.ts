import { VagasService } from './../services/vagas.service';
import { Component } from '@angular/core';
import { Vaga } from '../model/vagas';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.scss'
})
export class VagasComponent {
  vagas: Vaga[] = [];
  displayedColumns = ['titulo','tipo','descricao'];

  constructor(private VagasService: VagasService){
    this.vagas = this.VagasService.list();

  }

}
