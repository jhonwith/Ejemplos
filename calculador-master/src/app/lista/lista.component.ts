import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() entradaTarea: Tarea[];
  constructor() {
      this.entradaTarea = [];
   }

  ngOnInit(): void {
  }

}
