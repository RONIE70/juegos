import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { Router, NavigationEnd} from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { OnExit } from './../../guardianes/exit.guard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnExit {

  miUsuario:Usuario;
  /*claveAux:String;

  constructor(private router:Router) {
  this.miUsuario=new Usuario();
  //this.claveAux="";

  }

  /*VerificaClave ():void{

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
  }*/


  public contactForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private router:Router, private fb: FormBuilder ) {
    this.miUsuario=new Usuario();

  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'passwordRep': ['', Validators.required]
    });

  }



  VerificaClave ():void{
    if(this.contactForm.valid){
      if(this.contactForm.get('password').value == this.contactForm.get('passwordRep').value)
      {
        this.miUsuario.nombre=this.contactForm.get('nombre').value;
        this.miUsuario.mail=this.contactForm.get('email').value;
        this.miUsuario.password=this.contactForm.get('password').value;

        this.miUsuario.registrar();

        this.router.navigate(['login']);
      }
      else{
        alert("Las claves no son iguales, verificalas")
        this.router.navigate(['registro']);
      }
    }

  }

  onExit(){
    if (this.contactForm.valid){
      location.href = 'login';
    }
    if(this.contactForm.dirty){
      Swal.fire({
        title: 'Seguro que desea Salir?',
        text: "Estabas completando el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if(result.value){
          Swal.fire(
            'SALIDA ACEPTADA',
            'TE REDIRIGIMOS',
            'success',
        ).then(function () {
          location.href= 'bienvenido'
          // this.router.navigate(['login'])
        })
        }else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
              'Cancelado',
              'podes seguir completando el form',
              'error'
          )
        }
      })
      return false;
    }else{
      return true;
    }
  }

  private spacesValidator(control: AbstractControl): null
| object {
const nombre = <string>control.value;
const spaces = nombre.includes(' ');

return spaces
  ? { containsSpaces: true }
  : null;
}

}

