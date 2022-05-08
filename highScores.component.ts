import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Jugador } from 'src/app/jugador';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-highScores',
  templateUrl: './highScores.component.html',
  styleUrls: ['./highScores.component.css']
})
export class HighScoresComponent implements OnInit {
  jugadores: string[] = JSON.parse(localStorage.getItem('usuarioActual'));
  contadores:any= JSON.parse(localStorage.getItem('contadores'));
  jugador: Jugador;

  @Input('highScores')score = 0;
  @Output()"cambio" = new EventEmitter();

  constructor(private router: Router) { 
    this.jugador=new Jugador();
    //this.jugadores;
  }

  guardaJugadorCompleto(){
    this.jugador.guardaJugador();
  }

  asignaScore():number
        {
          if(typeof localStorage.getItem("contadores")!=null){
            let contador = JSON.parse(localStorage.getItem("contadores"))
            if (this.contadores<=5 && this.contadores !==1){
              this.score=100;
            }
            if (this.contadores>5 && this.contadores !==1){
              this.score=50;
            }
            if (this.contadores ==1){
              this.score=500;
            }
            
            }
            return this.score;
          }
          
          
         
    
  cambiar(){
   this.cambio.emit("Dato Emitido");
  }

  ngOnInit(): void {
  }

  ngOnChange():void{

  }

}
