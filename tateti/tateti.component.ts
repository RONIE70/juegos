/*import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
 turno:number;
 fichas:string[];
 puestas:number;
 partidaAcabada:boolean;
 textoVictoria:any;
 botones:any;
 //botonPulsado:any

constructor() {

    this.turno=1;
    this.fichas=["O","X"];
    this.puestas=0;
    this.partidaAcabada=false;
    this.textoVictoria=document.getElementById("textoVictoria");
    this.botones=Array.from(document.getElementsByTagName("button"));

    this.botones.forEach((x:any) => x.addEventListener("click",this.ponerFicha));
    }


  ponerFicha(event: any){
    //this.botones.forEach((x:any) => x.addEventListener("click",this.ponerFicha));
    let botonPulsado:any;
    botonPulsado= event.target;
    if(!this.partidaAcabada && this.botonPulsado.innerHTML == ""){
      botonPulsado.innerHTML = this.fichas[this.turno];
      this.puestas+=1;

      let estadoPartida:any = this.estado();
      if(estadoPartida == 0){
        this.cambiarTurno();
        if(this.puestas < 9){
          this.turnoBot();
          estadoPartida = this.estado();
          this.puestas += 1;
          this.cambiarTurno();
        }

      }
      if(estadoPartida == 1){
        this.textoVictoria.style.visibility = "visible";
        this.partidaAcabada = true;
      }else if (estadoPartida == -1) {
        this.textoVictoria.innerHTML = "Has perdido";
        this.partidaAcabada = true;
        this.textoVictoria.style.visibility = "visible";
      }

    }

  }

  estado(){
    let posicionVictoria = 0;
    let nEstado = 0;
    this.sonIguales();
    if(this.sonIguales(this.botones[0],this.botones[1],this.botones[2])){
      posicionVictoria=1;
    }else if ((this.botones[3],this.botones[4],this.botones[5])){
      posicionVictoria=2;
    }else if ((this.botones[6],this.botones[7],this.botones[8])){
      posicionVictoria=3;
    }else if ((this.botones[0],this.botones[3],this.botones[6])){
      posicionVictoria=4;
    }else if ((this.botones[1],this.botones[4],this.botones[7])){
      posicionVictoria=5;
    }else if ((this.botones[2],this.botones[5],this.botones[8])){
      posicionVictoria=6;
    }else if ((this.botones[0],this.botones[4],this.botones[8])){
      posicionVictoria=7;
    }else if ((this.botones[2],this.botones[4],this.botones[6])){
      posicionVictoria=8;
    }
    if(posicionVictoria > 0){
      if(this.turno == 1){
        nEstado = 1;
      }else{
        nEstado = -1;
      }
    }
    return nEstado;
  }

  sonIguales(...args:any){
      this.estado();
      args = Array.from(arguments);
      const valores = args.map((x:any) => x.innerHTML);

      if(valores[0] !="" && valores.every ((x:any,i:any,arr:any) => x === arr[0])){
        args.forEach((x:any) => x.style.backgroundColor = "Red")
         return true ;
      }else{
        return false;
      }
    }




    cambiarTurno(){
      if(this.turno==1){
        this.turno=0;
      }else{
        this.turno = 1;
      }
    }

    aleatorio(min: number,max: number){
      return Math.floor(Math.random() * (max-min+1))+min;
      }

    turnoBot(){
      this.aleatorio(0,8);
      let valores = this.botones.map(x => x.innerHTML);
      let pos = 1;

      if(valores[4] == ""){
        pos = 4;
      }else{
        let n = this.aleatorio(0, this.botones.length-1);
        while(valores[n] != ""){
          n = this.aleatorio(0, this.botones.length-1)
        }
        pos = n;
      }
      this.botones[pos].innerHTML = "O";
      return pos;
    }


  ngOnInit(): void {
  }



}*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';


@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
posiciones=[['-','-','-'],
            ['-','-','-'],
            ['-','-','-']];
jugador='O';
resultado:boolean;
mensajefinal:string;
mostrarJuego=false;
ocultaBoton=true;
btnSalida2=false;
btnSalida=true;
contador=0;

  constructor(private router:Router, private miJuegoService:JuegosService) {
    this.resultado=false;
   }

  ngOnInit(): void {
  }
  hacerSalidaSus(){
    this.btnSalida2=true;
  }
  hacerSalidaPan(){
    this.btnSalida=false;
  }

  iniciaJuego(){
    this.mostrarJuego=true;
    this.ocultaBoton=false;
   }

   mostrarMenu(){
    this.mostrarJuego=true;
   }

   menuJuego(){
    this.posiciones=[['-','-','-'],
            ['-','-','-'],
            ['-','-','-']];;
   }


  presion(fila:number,columna:number) {
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  reiniciar() {
    this.resultado=false;
    for(let f=0;f<3;f++)
      for(let c=0;c<3;c++)
        this.posiciones[f][c]='-';
  }

  cambiarJugador() {
    if (this.jugador=='O')
      this.jugador='X';
    else
      this.jugador='O';
  }
 leyendaFinal():void{
  this.resultado=true;
  this.mensajefinal='Gano:'+this.jugador;
  let usuario = localStorage.getItem('usuarioActual');
  this.miJuegoService.guardaPartida(this.contador,usuario,'tateti');
 }

  verificarGano(ficha: string) {
    if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha)

      this.leyendaFinal();
    if (this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha)
    this.contador++;
      this.leyendaFinal();
    if (this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha)
    this.contador++;
      this.leyendaFinal();
    if (this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha)
    this.contador++;
      this.leyendaFinal();
    if (this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha)
    this.contador++;
      this.leyendaFinal();
    if (this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha)
    this.contador++;
      this.leyendaFinal();
    if (this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha)
    this.contador++;
      this.leyendaFinal();
    if (this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha)
    this.contador++;
      this.leyendaFinal();
  }

}







