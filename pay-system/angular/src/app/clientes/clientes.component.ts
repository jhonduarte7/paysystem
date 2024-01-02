import { Component } from '@angular/core';
import { Cliente }  from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  constructor(private clienteService: ClienteService) { }

  clientes = [] as any[]; // Asignar un array vacío por defecto

  ngOnInit() {

  	 this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes 
   	);


  }


}
