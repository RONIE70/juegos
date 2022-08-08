import { Component, Input, OnInit } from '@angular/core';
import { Statistic } from 'src/app/statistic';
//import { pantallaJuegos} from 'src/app/page/pantallaJuegos';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { Jugador } from 'src/app/jugador';
import { Usuario } from 'src/app/usuario';
import { JuegosService } from './../../services/juegos.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  //@Input():any

  listaJugadores: Jugador;
  scores: any;
  usuarioActual:Usuario;
  jugador: Jugador;
  jugado: number;
  valorAPasar:any;

  constructor(private miServicio: JuegosService, private route: Router) {
    this.usuarioActual = JSON.parse(localStorage.getItem('users'));
    if (localStorage.getItem('highScore') != null) {
      this.scores = JSON.parse(localStorage.getItem('highScore'));
      this.miServicio.guardaPartida(5,this.usuarioActual.mail,'adivinador');
    }

  }

  ngOnInit() {
    //this.juegosService.guardaPartida(5,this.usuarioActual.mail,'adivinador');
  }

  selectojuego(numero:number):void{
    switch (numero){
      case 1:{
        this.jugado = 1;
        this.miServicio.guardaPartida(5,this.usuarioActual.mail,'adivinador');
        break;
      }
      case 2:{
        this.jugado = 2;
        this.valorAPasar={nombre: this.usuarioActual.nombre, mail: this.usuarioActual.mail, juego: '2'};
        break;
      }
      case 3:{
        this.jugado = 3;
        this.valorAPasar={nombre: this.usuarioActual.nombre, mail: this.usuarioActual.mail, juego: '3'};
        break;
      }
    }
  }

}

