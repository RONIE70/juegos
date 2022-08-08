import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { SuscripcionService } from '../services/suscripcion.service';

@Injectable({
  providedIn: 'root'
})

export class BronceGuard implements CanActivate {
    constructor(private servicioSusc:SuscripcionService, private router:Router){

    }
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.servicioSusc.accesoBronce){
        return true;
      } else {
        Swal.fire({
          title: "Suscripción: NO ACTIVA",
          text: "Contrata una membresía y empeza a disfrutar",
          confirmButtonText: "Comprar",
      }).then(function () {
        location.href= 'suscripcion'
      });
      }
        this.router.navigate(["suscripciones"]);
        return false;

      }

}


