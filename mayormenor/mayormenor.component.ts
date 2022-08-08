import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  leftNumber;
  rightNumber;
  score = '';
  timerGame = 0;
  showBtnStart = true;
  intervalGame:any=0;
  mostrarJuego=false;
  contador=0;
  jugadorActual: Usuario;
  error=0;
  btnSalir=false;

  constructor(private miJuegoService:JuegosService) {
    this.generateNumbers();
  }

  generateNumbers() {
    this.leftNumber = this.generateRandomNumber();
    this.rightNumber = this.generateRandomNumber();
    if (this.leftNumber === this.rightNumber) {
      this.generateNumbers();
    }
  }

  generateRandomNumber() {
    const maxNumber = 10;
    const randomDecimal = Math.random() * maxNumber;
    const randomNumber = Math.round(randomDecimal);
    return randomNumber;
  }

  isGreater(firstValue, secondValue) {
    if (firstValue > secondValue) {
      this.score = this.score + '😁';
      this.contador++;
      var usuario = localStorage.getItem('usuarioActual');
      this.miJuegoService.guardaPartida(this.contador,usuario,'mayor');

    } else {
      this.score = this.score + '❌';
      this.error++;
    }
    this.generateNumbers();
    }

  startGame() {
    this.showBtnStart = false;
    this.startTimer();
    this.mostrarJuego=true;
    this.btnSalir=true;
  }

  startTimer() {
    let timeInSeconds = 0;
    this.intervalGame = setInterval(() => this.timerGame = timeInSeconds++, 1000)
  }

  ngOnInit(): void {
  }

}
