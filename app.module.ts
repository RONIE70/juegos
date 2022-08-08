import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
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
import { EstadisticasComponent } from './page/estadisticas/estadisticas.component';
import { UserComponent } from './page/user/user.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { CuestionarioComponent } from './page/cuestionario/cuestionario.component';
import { OrdenanumeroComponent } from './page/ordenanumero/ordenanumero.component';
import { MayormenorComponent } from './page/mayormenor/mayormenor.component';
import { QueemojiComponent } from './page/queemoji/queemoji.component';
import { CatsService } from './services/cats.service';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionAltaComponent } from './page/suscripcionAlta/suscripcionAlta.component';
import { ChatComponent } from './page/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    RegistroComponent,
    QuienSoyComponent,
    InicioComponent,
    PantallaJuegosComponent,
    TatetiComponent,
    PptComponent,
    UsuariosComponent,
    UsuariosListadoComponent,
    AdivinaNumeroComponent,
    HighScoresComponent,
    EstadisticasComponent,
    UserComponent,
    NotfoundComponent,
    AhorcadoComponent,
    CuestionarioComponent,
    OrdenanumeroComponent,
    MayormenorComponent,
    QueemojiComponent,
    SuscripcionComponent,
    SuscripcionAltaComponent,
    ChatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GithubService, CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
