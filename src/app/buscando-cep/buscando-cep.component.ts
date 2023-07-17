import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class BuscandoCep {
  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  consultarCep (cep: string): Promise<any> {
    const url = `${this.apiUrl}/${cep}/json`;
    return this.http.get(url).toPromise();
  }
}