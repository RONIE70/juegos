import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuarioActual = new Usuario();

  constructor(private router:Router) {
    this.usuarioActual = new Usuario();
    this.usuarioActual.traeUsuario();
   }

  ngOnInit(): void {
  }

  traeUsuario(): void {
    if (localStorage.getItem('usuarioActual') != null) {
      var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
      if (localStorage.getItem('users') != null) {
        var users = JSON.parse(localStorage.getItem('users'));
      }
    } else {
      //window.alert('else del if');
    }
    //let encontrado = 0;
    for (let i in users) {
      if (usuarioActual[0]['mail'] == users[i]['mail']) {
        this.usuarioActual.nombre = users[i]['nombre'];
        this.usuarioActual.mail = users[i]['mail'];
        break;
      }
    }
  }


}
