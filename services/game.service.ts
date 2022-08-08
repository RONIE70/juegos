import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  findAll: any;
  pantallaFinal: boolean;
  ocultaBoton: boolean;


  constructor() { }


   getCompuSeleccion(): string {
    let selecciones = ['piedra', 'papel', 'tijera']; // Piedra, Papel, Tijeras
    let randomPc = Math.floor(Math.random() * 3);
    return selecciones[randomPc];
  }

  game(
    userSeleccion: string
  ): {
    mensaje: string;
    userSuma: number;
    compuSuma: number;
  } {
    let playUserComp = userSeleccion + this.getCompuSeleccion();
    //console.log(`Jugada realizada: ${playUserComp}`);
    let playResult: {
      mensaje: string;
      userSuma: number;
      compuSuma: number;
    };
    switch (playUserComp) {
      // Gana Usuario
      case 'piedratijera':
      case 'tijerapapel':
      case 'papelpiedra':
        playResult = {
          mensaje: 'Gana Player',
          userSuma: 1,
          compuSuma: 0,

        };

        break;
      // Gana la computadora
      case 'piedrapapel':
      case 'papeltijera':
      case 'tijerapiedra':
        playResult = {
          mensaje: 'Gana CompuBot',
          userSuma: 0,
          compuSuma: 1,
        };

        break;
      // Empatamos
      case 'piedrapiedra':
      case 'papelpapel':
      case 'tijeratijera':
        playResult = {
          mensaje: 'Eligieron lo mismo, nadie suma',
          userSuma: 0,
          compuSuma: 0,
        };
        break;
    }
    return playResult;
  }

  iniciaJuego(){
    this.pantallaFinal=true;
    this.ocultaBoton=false;
   }

   mostrarMenu(){
    this.pantallaFinal=true;
   }

   menuJuego(){
    this.ocultaBoton=true;
    this.pantallaFinal=false;
   }

}
