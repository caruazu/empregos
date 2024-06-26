import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { Vaga } from '../model/vagas';
import { environment } from "../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private readonly API_URL = `${environment.BACK_END_URL}/api/vaga`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Vaga[]>(this.API_URL).pipe(
      first()
    );
  }

  salvar(vagasForm: Partial<Vaga>){
    if (vagasForm._id) {
      return this.update(vagasForm);
    } else {
      return this.create(vagasForm);
    }
  }

  loadByID(_id: string) {
    return this.httpClient.get<Vaga>(`${this.API_URL}/${_id}`);
  }

  private create(vagasForm: Partial<Vaga>){
    return this.httpClient.post<Vaga>(this.API_URL, vagasForm);
  }

  private update(vagasForm: Partial<Vaga>){
    return this.httpClient.put<Vaga>(`${this.API_URL}/${vagasForm._id}`, vagasForm);
  }

  delete(vagasForm: Partial<Vaga>){
    return this.httpClient.delete<Vaga>(`${this.API_URL}/${vagasForm._id}`);
  }
}
