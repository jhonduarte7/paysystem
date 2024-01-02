import { Component } from '@angular/core';
import { Cliente }  from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes: Cliente[]=[

    {id:1, documento:'133',nombres:'Jhon',email:'johnduarete@gmail.com', apellidos:'Duarte',sexo:'M',fechaNacimiento:'2019-02-21'},
    {id:2, documento:'435',nombres:'Jesus',email:'Jesus@gmail.com', apellidos:'Ramirez',sexo:'M',fechaNacimiento:'2019-02-21'},
    {id:3, documento:'647',nombres:'Raul',email:'Raul@gmail.com', apellidos:'Soledad',sexo:'M',fechaNacimiento:'2019-02-21'},
    {id:4, documento:'757',nombres:'Samuel',email:'Samuel@gmail.com', apellidos:'Da silva',sexo:'M',fechaNacimiento:'2019-02-21'},
    {id:5, documento:'4767',nombres:'Maria',email:'Maria@gmail.com', apellidos:'De Souza',sexo:'F',fechaNacimiento:'2019-02-21'},
    {id:6, documento:'74575',nombres:'Luisa',email:'Luisa@gmail.com', apellidos:'Guilarte',sexo:'F',fechaNacimiento:'2019-02-21'},
    {id:7, documento:'998969',nombres:'Carmen',email:'Carmen@gmail.com', apellidos:'Lopez',sexo:'F',fechaNacimiento:'2019-02-21'},
 


  ];

}
