export class Tarea{
    titulo: string;
    descripcion: string;
    constructor(titulo = '', descripcion = '') {
       this.titulo = titulo;
       this.descripcion = descripcion;
    }
}