import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'calculadora';
  // titulos : string [];
  listaTareas: Tarea[];
  constructor(){
    this.listaTareas = [];
    // this.titulos = ['El nino que domino el viento','Monstruos','Freddy G','Titanic','500 dias juntos'];
  }

  // mensajeAPP(event: any){
  //   console.log("test carga del metodo",event);
  //   console.log("test desde app");
  // }
  enviarTareaCreada(tarea: any){
    console.log("App component-->",tarea);
    this.listaTareas.push(tarea);
    console.log("LISTA TAREA-->", this.listaTareas);
  }
}
