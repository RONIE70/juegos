import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-ordenanumero',
  templateUrl: './ordenanumero.component.html',
  styleUrls: ['./ordenanumero.component.css']
})
export class OrdenanumeroComponent implements OnInit {

  arrayRandomNum:any;
  previousNum = 0;
  mensajeVictoria = false;
  mensajeError = false;
  mensajeUsuario:any;
  contador=0;

  constructor(private miJuegoService:JuegosService) {
    this.generateNum();
  }

  generateNum(){
    this.arrayRandomNum = this.generateArrayRandomNum();
  }

  generateArrayRandomNum() {
    const maxNum = 54;
    const array = [];
    for (let i=0; i < maxNum; i++) {
      const randomNum = Math.round(Math.random() * maxNum);
      array.push(randomNum);
    }

    return array;
  }

  clickMe(numero: number){
    if(numero >= this.previousNum){
      this.previousNum = numero;
      this.removeElement(numero);
      this.mensajeUsuario = "Estas haciendolo muy bien!! 💪";
      this.mensajeVictoria = true;
      this.mensajeError = false;
      this.contador++;
    }else{
      this.arrayRandomNum = [];
      this.mensajeUsuario = "Fallaste 😟";
      this.mensajeVictoria = false;
      this.mensajeError = true;
    }
    //console.log('array ', this.arrayRandomNum);
    if(this.contador>20){
    var usuario = localStorage.getItem('usuarioActual');
    this.miJuegoService.guardaPartida(this.contador,usuario,'ordena');
    }
  }

  removeElement(numero:any){
    const position = this.arrayRandomNum.indexOf(numero);
    this.arrayRandomNum.splice(position, 1);
  }

  ngOnInit(): void {
  }

}
/*Añade un botón al final de tu HTML, donde le
pondrás el evento click (click)="" , es similar a
como lo hicimos con la función clickMe(), pero llamando
a una nueva función que crees en donde llamaras a la
función generateNumbers(), para volver a generar la
lista de números aleatorios. Ademas en esta nueva
función debes ocultar el mensaje de error
(actualizando la variable showErrorMessage= false).
Este botón solo debes mostrarlo cuando el usuario
falle (usa la directiva *ngIf ).*/
