import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { GamelistComponent } from './componentes/gamelist/gamelist.component';

import { GameservService } from './service/gameserv.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormularioComponent,
    GamelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
