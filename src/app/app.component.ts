import { Component } from '@angular/core';
import { BuscandoCep } from './buscando-cep/buscando-cep.component'

@Component({
  selector: 'cep-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private buscandoCep: BuscandoCep) {}

  consultarCep(cep: string): void{
    this.buscandoCep.consultarCep(cep).then(data =>{
     
      console.log(data);
    }).catch(error => {
      console.error(error);
    })
  }
}