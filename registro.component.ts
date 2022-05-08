import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miUsuario:Usuario;
  claveAux:String;
  constructor(private router:Router) { 
  this.miUsuario=new Usuario();
  this.claveAux="";

  }

  VerificaClave ():void{
    
    if (this.miUsuario.mail != null && this.miUsuario.password != null)
    {
   
      if(this.miUsuario.password==this.claveAux)
      {
        this.miUsuario.registrar();
        
        this.router.navigate(['login']);
      }
      else{
        alert("Las claves no son iguales, verificalas")
        this.router.navigate(['registro']);
      }
    }
    else {
      alert ("Todos los campos son obligatorios");
    }
  }
  

  


  
  Registrar()
  {
    console.log (this.miUsuario.nombre);
    console.log (this.miUsuario.password);
    console.log (this.miUsuario.mail) // console info me muestra todos los atributos
    // console error para ver que estamos mostrando
    if (this.miUsuario.nombre == "admin" && this.miUsuario.password == "124") 
    {
      this.router.navigate (['bienvenido']);
    }
    else{
      this.router.navigate (['registro']);
    }
  }

 
  ngOnInit(): void {
  }

}
