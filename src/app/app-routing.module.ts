import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes importados
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';


//Rutas de nuestra aplicacion
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'grafica1', component: Grafica1Component },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagesfoundComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
