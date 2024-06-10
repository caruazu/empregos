import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaga } from '../model/vagas';
import { delay, first, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VagasService {


  private readonly API_URL = 'api/vaga';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Vaga[]>(this.API_URL).pipe(
      first()
    );
  }
}
