import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/jugador';

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
  //terminajuego=false;
  contador: number=0;
  score: number=0;
  numSecret: number = this.numAleatorio(0, 100);
  datoHijo: string = "Sin dato";
 

  constructor() {
    
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
       
        var contadores  = localStorage.setItem('contadores', JSON.stringify(this.contador));
        contadores=JSON.parse(localStorage.getItem('contadores'));
        
      }

    }

  }

  asignaScore()
        {
          
          this.contador=JSON.parse(localStorage.getItem('contadores'));
          if (this.contador<=5 && this.contador !=1){
            this.score=100;
          if (this.contador==1){
            this.score=100;
          }else{
            this.score=5;
          }
          
          }
          return this.score;
          console.log(this.score);
        }

 funCambiar(e){
    console.log(e);
    this.datoHijo=e;
  }     

  ngOnInit(): void {}
}
