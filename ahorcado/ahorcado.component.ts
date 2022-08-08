import { Component, Input, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
})
export class AhorcadoComponent implements OnInit {
  @Input() datosAPasarAhorcado: any;

  espacios: Array<string>;
  letra: string = '';
  palabra: string = '';
  letrasElegidas: string = '';
  errores: number = 0;
  alfabeto: string;
  mostrarJuego = false;
  ocultaBoton = true;
  palabraMatriz: string[];
  aleatorio: number;
  salida: boolean;
  contador:number;
  contadorEsta:number;
  gano:boolean;
  palabraArmada:string;


  constructor(private miJuegoService:JuegosService) {
    //this.miAhorcado = new Ahorcado();
    this.palabraMatriz = ['entrazado','entre','entreabierto','entreabrir','entreacto','entreancho','entrebarrera','entrecalle'
    ,'entrecanal','entrecano','entrecasco','abanderado','abanderamiento','abanderar','abanderizador'
    ,'abanderizar','abandonado','abandonamiento','abandonar','malcriadez','malcriadeza','malcriado'
    ,'malcriar','maldad','maldadosamente','maldadoso','maldecido','maldecidor','maldecimiento','maldecir'
    ,'maldiciente','maldicientemente','maldicion','maldispuesto','reliquiario','rellanar','rellano',
    'rellena','rellenar','relleno','relocho','reloj','relojera','relojero','relojeria','relso',
    ];
    this.salida = false;
    this.aleatorio = Math.floor(Math.random() * 50);
    this.palabra = this.palabraMatriz[this.aleatorio];
    this.espacios = this.palabra.split('');
    this.alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    this.contador=0;
    this.contadorEsta=0;
    this.gano=false;
    this.palabraArmada='';
  }

  ngOnInit(): void {}

  validar() {
    if (!this.palabraMatriz[this.aleatorio].includes(this.letra)) {
      this.contador++;
    }
    if (this.palabraMatriz[this.aleatorio].includes(this.letra)) {
      for(var i=0;i<this.palabraMatriz[this.aleatorio].length;i++){
        if(this.palabraMatriz[this.aleatorio][i]==this.letra){
          this.contadorEsta++;
        }
      }


    }
    if (/[a-zA-Z]$/.test(this.letra)) {
      this.letrasElegidas += ' • ' + this.letra;
      this.palabraArmada += this.letra;
      this.letra = '';

    }
   this.verificaFinal();


  }

  contiene(pal: string): boolean {
    return (
      this.letrasElegidas
        .toLocaleLowerCase()
        .indexOf(pal.toLocaleLowerCase()) >= 0
    );
  }

  iniciaJuego() {
    this.mostrarJuego = true;
    this.ocultaBoton = false;
  }

  mostrarMenu() {
    this.mostrarJuego = true;
  }

  menuJuego() {
    this.ocultaBoton = true;
    this.mostrarJuego = false;
  }

  volverJuego() {
    this.aleatorio = Math.floor(Math.random() * 50);
    this.palabra = this.palabraMatriz[this.aleatorio];
    this.espacios = this.palabra.split('');
    this.letrasElegidas = '';
    this.contador=0;
    this.gano=false;
  }

  salir() {
    this.salida = true;
  }

  verificaFinal(){
  if(this.contadorEsta == this.palabraMatriz[this.aleatorio].length)
    this.gano= true;
    this.ocultaBoton=true;
    let usuario = localStorage.getItem('usuarioActual');
    this.miJuegoService.guardaPartida(this.contadorEsta,usuario,'tateti');

  }
}
