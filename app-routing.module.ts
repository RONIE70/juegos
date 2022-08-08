import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { PantallaJuegosComponent } from './page/pantallaJuegos/pantallaJuegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PptComponent } from './page/ppt/ppt.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosListadoComponent } from './page/usuariosListado/usuariosListado.component';
import { AdivinaNumeroComponent } from './page/adivinaNumero/adivinaNumero.component';
import { HighScoresComponent } from './page/highScores/highScores.component';
import { FormGroup } from '@angular/forms';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { FormBuilder } from '@angular/forms';
import { CuestionarioComponent } from './page/cuestionario/cuestionario.component';
import { OrdenanumeroComponent } from './page/ordenanumero/ordenanumero.component';
import { MayormenorComponent } from './page/mayormenor/mayormenor.component';
import { QueemojiComponent } from './page/queemoji/queemoji.component';
import { EstadisticasComponent} from './page/estadisticas/estadisticas.component';
import { ExitGuard } from './guardianes/exit.guard';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionAltaComponent } from './page/suscripcionAlta/suscripcionAlta.component';
import { BronceGuard } from './guardianes/bronce.guard';
import { OroGuard } from './guardianes/oro.guard';
import { PlataGuard } from './guardianes/plata.guard';
import { ChatComponent } from './page/chat/chat.component';

const routes: Routes = [
  { path: "suscripcion", component:SuscripcionComponent},
  { path: "bienvenido", component:BienvenidoComponent},
  { path: "login", component:LoginComponent},
  { path: "registro",  canDeactivate:[ExitGuard], component:RegistroComponent},
  { path: "quien-soy",component:QuienSoyComponent},
  { path: "inicio", component:InicioComponent},
  { path: "cuestionario", component:CuestionarioComponent},
  { path: "estadisticas", component:EstadisticasComponent},
  { path: "chat", component:ChatComponent},
  //{ path: "juegos", component:PantallaJuegosComponent},
  //{ path: "juegos/tateti", component:TatetiComponent},
  //{ path: "juegos/ppt", component:PptComponent},
  { path: "juegos", component:PantallaJuegosComponent,
  children: [
    { path: "tateti", component:TatetiComponent,canActivate:[PlataGuard]},
    { path: "ppt", component:PptComponent,canActivate:[OroGuard]},
    { path: "adivinador", component:AdivinaNumeroComponent,canActivate:[PlataGuard]},
    { path: "ahorcado", component:AhorcadoComponent,canActivate:[OroGuard]},
    { path: "ordenanumero", component:OrdenanumeroComponent,canActivate:[OroGuard]},
    { path: "mayormenor", component:MayormenorComponent,canActivate:[BronceGuard]},
    { path: "queemoji", component:QueemojiComponent,canActivate:[OroGuard]},
  ]
},
{ path: "tateti", component:TatetiComponent,canActivate:[PlataGuard]},
{ path: "ppt", component:PptComponent,canActivate:[OroGuard]},
{ path: "adivinador", component:AdivinaNumeroComponent,canActivate:[PlataGuard]},
{ path: "highscores",component:HighScoresComponent},
{ path: "ahorcado", component:AhorcadoComponent,canActivate:[OroGuard]},
{ path: "ordenanumero", component:OrdenanumeroComponent,canActivate:[OroGuard]},
{ path: "mayormenor", component:MayormenorComponent,canActivate:[BronceGuard]},
{ path: "queemoji", component:QueemojiComponent,canActivate:[OroGuard]},
{ path: "suscripcion", component:SuscripcionComponent},
{ path: "suscripcionAlta", component:SuscripcionAltaComponent},
{ path: "usuarios", component:UsuariosComponent,
children: [
  { path: "listado", component:UsuariosListadoComponent},
  ]
},
    { path: "FormGroup", component:FormGroup},
    { path: "FormBuilder", component:FormBuilder},
    { path: "", component:BienvenidoComponent},
    { path: "**", component:ErrorComponent}
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
