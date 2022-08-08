import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/jugador';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Output() gameStarted: EventEmitter<any>;
  player1:Jugador;
  player2:Jugador;

  constructor(private router:Router) {
    this.gameStarted = new EventEmitter();
    this.player1 = new Jugador();
    this.player2 = new Jugador();
  }

  ngOnInit() {
  }

  startGame(formUsuario){
    if(formUsuario.valid){
      var objectStarted = {
        isStarted: true,
        player1: this.player1,
        player2: this.player2
      }
      this.gameStarted.emit(objectStarted);
    }
  }

  showStatistics(){
    this.router.navigate(['/statistics'])
  }
}
