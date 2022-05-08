import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantallaJuegos',
  templateUrl: './pantallaJuegos.component.html',
  styleUrls: ['./pantallaJuegos.component.css']
})
export class PantallaJuegosComponent implements OnInit {
  mostrarJuego=true;

  constructor() { 
    
  }

  iniciaJuego(){
    this.mostrarJuego=false;
   }

   mostrarMenu(){
  this.iniciaJuego;
 }

  ngOnInit(): void {
  }

}
