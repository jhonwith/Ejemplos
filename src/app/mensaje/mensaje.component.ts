import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string = "";
  // nombre de nuestro evento
  @Output() pulsarMensaje :  EventEmitter<string>;
  constructor() { 
    this.titulo = "...";
    this.pulsarMensaje = new EventEmitter();
  }

  ngOnInit(): void {
  }
  //metodo a generar
  emitirMensaje(){
    this.pulsarMensaje.emit("*************alerta pulsada*************");
  }

}
