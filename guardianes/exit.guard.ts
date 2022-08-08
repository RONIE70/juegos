import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface OnExit {
onExit: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: OnExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //code const rta = confirm('estas seguro de salir'); return rta;
    //const rta = confirm('estas seguro de salir');
      return component.onExit ? component.onExit (): true;
      //return component.onExit ()
  }

}
