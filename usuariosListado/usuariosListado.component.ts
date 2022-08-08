import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { JuegosService } from './../../services/juegos.service';

@Component({
  selector: 'app-usuariosListado',
  templateUrl: './usuariosListado.component.html',
  styleUrls: ['./usuariosListado.component.css'],
})
export class UsuariosListadoComponent implements OnInit {
  usuarios: string[] = JSON.parse(localStorage.getItem('users'));
  listaSuscripciones: any [] = JSON.parse(localStorage.getItem('suscripciones'));

  constructor(private miServicio: JuegosService) {}

  ngOnInit(): void {
    //console.log(this.listaSuscripciones)
  }
}
