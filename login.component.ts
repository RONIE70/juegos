import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit 
{
  miUsuario: Usuario;

  constructor(private router: Router) 
  {
    this.miUsuario = new Usuario();
  }

  Mostrar() 
  {
    console.log(this.miUsuario.nombre);
    console.log(this.miUsuario.password); // console info me muestra todos los atributos
    // console error para ver que estamos mostrando
    if (this.miUsuario.nombre == 'admin' && this.miUsuario.password == '124') {
      this.router.navigate(['bienvenido']);
    }
     else 
    {
      this.router.navigate(['registro']);
    }
  }

  ngOnInit(): void {}

  validaLogin():void{
    if(typeof localStorage.getItem("users")!=null){
      var users = JSON.parse(localStorage.getItem("users"))
    }
    let encontrado = 0;
    for(let i in users ){
      //window.alert(users[i]["mail"]+ " " +this.miUsuario.mail + " "+ this.miUsuario.password);
      if(users[i]["mail"] == this.miUsuario.mail){
        encontrado = 1;
        if(users[i]["password"] == this.miUsuario.password){
          //window.alert("Bienvenido " + users[i]["nombre"]);
          this.miUsuario.guardaUsuarioActual();
          this.router.navigate(["inicio"]);
        
          break;
        }
        else{
          window.alert("Acceso Restringido");
        }
      }
    }
    if(!encontrado){
      window.alert("Usuario no existe");
      this.router.navigate(["registro"]);
    }

  }
}
