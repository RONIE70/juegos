import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-queemoji',
  templateUrl: './queemoji.component.html',
  styleUrls: ['./queemoji.component.css']
})
export class QueemojiComponent implements OnInit {
  name = '¿Cuál fue el emoji? 👑';
  scoreGame = '';
  showBtnStart = true;
  countDownEmoji: number;
  emojiArray = ['🚗','​🚓​', '🌌', '📻', '👻', '🍦', '👽', '👯', '🐹​',
  '​☃️​','​⛄​','​​🐺​',​​'😼',​​​'🏊🏾‍♂️','​🏊🏼','​🛀🏻​','🛀🏽​','🤹🏿‍♂️','​🤹🏼‍♂️','​🏃🏻','​🏃🏽‍♂️',
  '​🧑🏾‍✈️','​🧑🏿‍✈️','​🧑🏻‍✈️','​🧑🏻‍🚀','​🧑🏽‍💻','​🧑🏾‍💻','​🧑🏿‍🏭',
  '​🧑🏽‍🏭','​🧑🏿‍🍳','​🧑🏾‍🌾','​🧑🏾‍⚖️','​🧑🏿‍⚖️','​🧑🏾‍⚕️','​🧑🏽‍⚕️​','🧑🏿‍🦲','​🧑🏾‍🦳'​​];
  emojiIndex: number;
  maxNumberEmoji = this.emojiArray.length - 1;
  countDownEmojiSize = 2;
  emojiAskIndex: number;
  youWin = false;
  catURL = '';
  intervalGame: any;
  timerGame = 0;
  contador=0;

  constructor(private catsService: CatsService,private miJuegoService:JuegosService) { }

  startGame() {
    this.showBtnStart = false;
    this.startTimer();
    this.randomEmoji();
  }
  newStartGame() {
    this.showBtnStart = true;
    this.youWin = false;
    this.startTimer();
    this.randomEmoji();

  }

  startTimer() {
    let timeInSeconds = 0;
    this.intervalGame = setInterval(() => this.timerGame = timeInSeconds++,800)
  }

  randomEmoji() {
    this.emojiIndex = Math.round(Math.random() * this.maxNumberEmoji);
    this.startcountDownFirstEmoji();
  }

  startcountDownFirstEmoji() {
    const intervalEmoji = setInterval(() => this.intervalEmojiControl(intervalEmoji),800);
  }

  intervalEmojiControl(intervalEmoji) {
    this.countDownEmoji = this.countDownEmojiSize--;

    // Cuando termine el numero de segundos para recordar la imagen, se debe parar el setInterval
    if (this.countDownEmoji < 0) {
      clearInterval(intervalEmoji);
      this.thisIsYourEmoji();
    }
  }

  compareAnswer(answer) {
    switch (answer) {
      case 'SI':
        if (this.emojiIndex === this.emojiAskIndex) {
          this.scoreGame = this.scoreGame + '✅';
          this.contador++;
          this.finishGame();
        } else {
          this.scoreGame = this.scoreGame + '❌';
        }
        break;
      case 'NO':
        if (this.emojiIndex !== this.emojiAskIndex) {
          this.scoreGame = this.scoreGame + '✅';
          this.thisIsYourEmoji();
        } else {
          this.scoreGame = this.scoreGame + '❌';
        }
        break;
    }

  }

  thisIsYourEmoji() {
    this.emojiAskIndex = Math.round(Math.random() * this.maxNumberEmoji);
  }

  finishGame() {
  // Cuando el juego finalice, se debe parar el setInterval del contador de tiempo del juego
    clearInterval(this.intervalGame);
    this.youWin = true;
    let usuario = localStorage.getItem('usuarioActual');
    this.miJuegoService.guardaPartida(this.contador,usuario,'emoji');

    this.getCatImage();
    this.newStartGame();
  }

  getCatImage(): void {
    this.catsService
      .getImage()
      .subscribe(
        {
          next: resultQuestion => {
            console.log(resultQuestion);
        },
        error: err => {
          console.log('Ups! Ocurrió error: ', err.error);
        }
      });
  }

  ngOnInit(): void {
  }

}
