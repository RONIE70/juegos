import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario} from 'src/app/usuario';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
mostrarChat=false;
usuario:Usuario;
nuevoMensaje:string="";
usuarioActual =localStorage.getItem('usuarioActual');
mensajes:any=[
  {
    emisor:"mail",
    texto:"Hola como estas?"
  },
  {
    emisor:"mail",
    texto:"Todo Bien?"
  },
  {
    emisor:"mail",
    texto:"Que Onda?"
  }
]

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario;

  }

  enviarMensaje(){
    //console.log(this.nuevoMensaje);
    if(this.nuevoMensaje=="") return;
    let mensaje = {
      emisor:this.usuarioActual,
      texto:this.nuevoMensaje
    }
    this.mensajes.push(mensaje);
    this.nuevoMensaje="";
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo:any = elements[(elements.length-1)];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('contenedorDeMensajes').scrollTop = toppos;
  }
}
