import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Vaga } from '../model/vagas';
import { VagasService } from '../services/vagas.service';

@Injectable({
  providedIn: 'root'
})

export class VagaResolver {

  constructor(private vagasService: VagasService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vaga> {
    if (route.params && route.params['_id']) {
      return this.vagasService.loadByID(route.params['_id']);
    }
    return of({ _id: '', titulo: '', tipo: '', descricao: '' });
  }
}

