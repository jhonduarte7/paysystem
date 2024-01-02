import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css',
})
export class DirectivaComponent {
  tasks  = [
    {id: 171,  description: 'Planear actividades',  date: '2022-04-01'},
    {id: 172,  description: 'Entrenamiento',  date: '2022-04-08'},
    {id: 173,  description: 'Lectura',  date: '2022-04-12'},
    {id: 174, description: 'Clases de Frances',  date: '2022-05-10'},
    {id: 175, description: 'Natación',  date: '2022-05-13'},
    {id: 176, description: 'Pagar Facturas',  date: '2022-05-17'},
  ];
}
