export class Cliente {
  id: number;
  documento: string;
  nombres: string;
  email: string;
  apellidos: string;
  sexo: string;
  fechaNacimiento: string;

  

  constructor(
    id: number,
    documento: string,
    nombres: string,
    email: string,
    apellidos: string,
    sexo: string,
    fechaNacimiento: string
  ) {
    this.id = id;
    this.documento = documento;
    this.email = email;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.fechaNacimiento = fechaNacimiento;
  }
}
