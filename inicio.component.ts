import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  miUsuario: Usuario;
  
  constructor() {
    this.miUsuario = new Usuario();
   }

  ngOnInit(): void {
  }

}
