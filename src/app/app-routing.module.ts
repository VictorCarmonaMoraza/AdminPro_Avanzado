import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes importados
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';


//Rutas de nuestra aplicacion
const routes: Routes = [




  { path: '**', component: NopagesfoundComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
