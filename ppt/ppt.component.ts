import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  resultado: string;
  puntosUsuarios = 0;
  puntosCompu =  0;
  mostrarJuego = true;
  ocultaBoton = false;
  terminaJuego = true;

  constructor(private miJuegoService:JuegosService, private playGame: GameService) {}


  ngOnInit(): void {
    this.resultado = 'Esperando jugada...';

  }

  iniciaJuego(){
    this.mostrarJuego=false;

   }

   mostrarMenu(){
    this.mostrarJuego=true;
   }

   menuJuego(){
    this.ocultaBoton=true;
    this.mostrarJuego=false;
   }

  play(eleccion: string): void {
    let resultado = this.playGame.game(eleccion);
    this.resultado = resultado.mensaje;
    this.puntosUsuarios += resultado.userSuma;
    this.puntosCompu += resultado.compuSuma;
    if (this.puntosUsuarios == 3) {
      this.resultado = 'Gano el jugador';
      this.terminoJuego();

    }
    if (this.puntosCompu == 3) {
      this.resultado = 'Gano la compu';
      this.terminoJuego();

    }
  }

  volverJugar():void{
  this.puntosUsuarios = 0;
  this.puntosCompu =  0;
  this.terminaJuego=true;
  }

  terminoJuego(){
    this.terminaJuego=false;
    this.ocultaBoton= true;
    if(this.puntosUsuarios>this.puntosCompu){
    var usuario = localStorage.getItem('usuarioActual');
    this.miJuegoService.guardaPartida(this.puntosUsuarios,usuario,'ppt');
    }
  }

}
