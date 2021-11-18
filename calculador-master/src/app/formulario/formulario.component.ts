import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  objetoTarea : Tarea;
  @Output() tareadaCreada : EventEmitter<Tarea>;
  constructor() {
    this.objetoTarea = new Tarea;
    this.tareadaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  enviar(){
    this.tareadaCreada.emit(this.objetoTarea);
    console.log("TAREA----->",this.objetoTarea);
    this.objetoTarea = new Tarea;
  }

}
