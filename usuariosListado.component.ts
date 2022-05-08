import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-usuariosListado',
  templateUrl: './usuariosListado.component.html',
  styleUrls: ['./usuariosListado.component.css'],
})
export class UsuariosListadoComponent implements OnInit {
  usuarios: string[] = JSON.parse(localStorage.getItem('users'));

  constructor() {}

  ngOnInit(): void {}
}
