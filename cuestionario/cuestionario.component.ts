import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  miUsuario:Usuario;
  //claveAux:String;
  public forma: FormGroup;
  mail: any;



  constructor(private router:Router, private fb: FormBuilder ) {
  this.miUsuario = new Usuario();

  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'claveAux': ['', Validators.required],
      'terminos': ['', Validators.required]
    });
  }



  VerificaClave ():void{

      if(this.forma.get('password').value==this.forma.get('claveAux').value)
      {
        this.miUsuario.registrar();
        this.router.navigate(['login']);
      }
      else{
        alert("Las claves no son iguales, verificalas")
        this.router.navigate(['registro']);
      }


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
  }*/





  public aceptar(): boolean {
    if(JSON.parse(localStorage.getItem('usuarios')) !== null)
    {
        let listadoUsuarios = JSON.parse(localStorage.getItem('usuarios'));
        for (let usuarios of listadoUsuarios)
        {
            if(usuarios.mail == this.mail)
            {
                return false;
            }
        }
    }

    return true;
}

  validaUsuarioRegistrado(): boolean{

    if(JSON.parse(localStorage.getItem('usuarios')) !== null)
    {
        let listadoUsuarios = JSON.parse(localStorage.getItem('usuarios'));
        for (let usuarios of listadoUsuarios)
        {
            if(usuarios.mail == this.mail)
            {
                return false;
            }
        }
    }

    return true;
}

  // CUSTOM VALIDATOR
private spacesValidator(control: AbstractControl): null
| object {
const nombre = <string>control.value;
const spaces = nombre.includes(' ');

return spaces
  ? { containsSpaces: true }
  : null;
}


}
