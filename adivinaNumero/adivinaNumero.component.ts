import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from 'src/app/jugador';
import { Usuario } from 'src/app/usuario';
import { JuegosService } from './../../services/juegos.service';

@Component({
  selector: 'app-adivinaNumero',
  templateUrl: './adivinaNumero.component.html',
  styleUrls: ['./adivinaNumero.component.css'],
})
export class AdivinaNumeroComponent implements OnInit {

  num: number;
  mayorMenor:any;
  igualNum=false;
  mostrarJuego=false;
  ocultaBoton=true;
  terminajuego=false;
  contador: number=1;
  score: number=0;
  numSecret: number = this.numAleatorio(0, 100);
  datoHijo: string = "Sin dato";
  jugadornuevo: Jugador;
  jugadorActual: Usuario;

  constructor(private miJuegoService:JuegosService) {

  }

  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

 iniciaJuego(){
  this.mostrarJuego=true;
  this.ocultaBoton=false;
 }

 mostrarMenu(){
  this.mostrarJuego=true;
 }

 menuJuego(){
  this.ocultaBoton=true;
  this.mostrarJuego=false;

 }

  compruebaNumero() {

    if (this.num)
    {
      if (this.numSecret < this.num)
      {
        this.mayorMenor = true;

        this.contador++;
      }
      else if (this.numSecret > this.num)
      {
        this.mayorMenor = false;
        this.contador++;
      }
      else
      {
        this.igualNum = true;
        this.contador++;
        this.asignaScore();
        let usuario = localStorage.getItem('usuarioActual');
        this.miJuegoService.guardaPartida(this.contador,usuario,'adivina');
        //this.menuJuego();
      }

    }

  }

  asignaScore()
        {
          if (this.contador<=5 && this.contador !=1){
             this.score=100;

          if (this.contador==1){
            this.score=1000;
          }

        }
          return this.score;
        }

 funCambiar(e){
    console.log(e);
    this.datoHijo=e;
  }

  ngOnInit(): void {}

  //dato:string;


        //dato='paula';
        //dato = this.datosAPasar.nombre;
        //this.jugadornuevo.setNombre('paula');
        //dato='paula@mail';
        //dato = this.datosAPasar.mail;
        //this.jugadornuevo.setMail('paula@mail');
        //this.jugadornuevo.juego = this.datosAPasar.juego;
        //this.jugadornuevo.juego=1;
        //window.alert('aca pasa adivina ');
        //this.jugadornuevo.setNombrejuego('Adivina');
        //this.jugadornuevo.nombreJuego='Adivina';
        //this.jugadornuevo.puntaje = 1;//this.asignaScore(this.contador);
        //var fecha = new Date();
        //this.jugadornuevo.fecha = fecha.toLocaleDateString();
       // this.jugadornuevo.guardaScore();
       // this.asignaScore();
}
