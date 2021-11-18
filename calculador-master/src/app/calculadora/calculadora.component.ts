import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado: string;
  constructor() {
    this.resultado = "";
  }

  ngOnInit(): void {
  }

  enviarNumero(event: any) : void {
    console.log(event.target.innerHTML);
    this.resultado += event.target.innerHTML;
  }
  enviarResultado(){
    this.resultado = eval(this.resultado);
    console.log("resultado");
  }
}
