import { PagesRoutingModule } from './pages/pages-routing.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes importados
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';


//Rutas de nuestra aplicacion
const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NopagesfoundComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
