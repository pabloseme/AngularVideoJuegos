import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamelistComponent } from './componentes/gamelist/gamelist.component';

//definir rutas de mi aplicacion
const routes: Routes = [
  {
    //para la ruta inicial de la aplicacion me redicciona a la ruta /games
    path :'',
    redirectTo :'/games',
    pathMatch: 'full'
  },
  {
    path:'games',
    component : GamelistComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
