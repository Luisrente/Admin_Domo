import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriaAgregarComponent } from './papel/categoria/categoria-agregar/categoria-agregar.component';
import { DashboardComponent } from './papel/dashboard/dashboard.component';
import { CategoriaEditarComponent } from './papel/categoria/categoria-editar/categoria-editar.component';
import { CategoriaInicioComponent } from './papel/categoria/categoria-inicio/categoria-inicio.component';
import { EstadisticasComponent } from './papel/estadisticas/estadisticas.component';
import { OfertasComponent } from './papel/ofertas/ofertas.component';
import { UserComponent } from './papel/user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashborad',
    component: DashboardComponent,children:[
      {
        path: 'categoriaAgregar',
        component: CategoriaAgregarComponent
      },
      {
        path: 'categoriaEditar',
        component: CategoriaEditarComponent
      }, 
      {
        path: 'categoriaInicio',
        component: CategoriaInicioComponent
      },
      {
        path: 'home',
        component: EstadisticasComponent
      },
      {
        path: 'Ofertas',
        component: OfertasComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
