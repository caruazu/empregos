import { Injectable } from '@angular/core';
import { Vaga } from '../model/vagas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private httpClient: HttpClient) { }

  list(): Vaga[] {
    return [
      {
        _id:'1',
        titulo:'Pessoa desenvolvedora de Angular',
        tipo:'Desenvolvimento',
        descricao: 'Nós da startup maneira precisamos de um desenvolvedor front end.'
      }
    ];
  }
}
