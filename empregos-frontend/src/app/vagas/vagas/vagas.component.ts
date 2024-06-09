import { Component } from '@angular/core';
import { Vagas } from '../model/vagas';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.scss'
})
export class VagasComponent {
  vagas: Vagas[];
  displayedColumns = ['titulo','tipo','descricao'];

  constructor(){
    this.vagas = [
      {
        _id:'1',
        titulo:'Pessoa desenvolvedora de Angular',
        tipo:'Desenvolvimento',
        descricao: 'Nós da startup maneira precisamos de um desenvolvedor front end.'
      }
    ];
  }

}
