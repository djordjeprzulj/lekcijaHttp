import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Konto } from '../models/konto.model';

@Injectable({
  providedIn: 'root'
})
export class KontoService {

  kontos: Konto[];

  constructor(private httpClient: HttpClient) {}

  public getAllKontos() {
    const url = environment.API_URL + 'konto';
    this.httpClient.get<Konto[]>(url)
      .subscribe(res => this.kontos = res);
  }

  getKontos(): Konto[] {
    return this.kontos;
  }

}
