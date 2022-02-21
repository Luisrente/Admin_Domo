import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './papel/dashboard/dashboard.component';
import { CategoriaInicioComponent } from './papel/categoria/categoria-inicio/categoria-inicio.component';
import { CategoriaAgregarComponent } from './papel/categoria/categoria-agregar/categoria-agregar.component';
import { CategoriaEditarComponent } from './papel/categoria/categoria-editar/categoria-editar.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EstadisticasComponent } from './papel/estadisticas/estadisticas.component';
import { OfertasComponent } from './papel/ofertas/ofertas.component';
import { UserComponent } from './papel/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CategoriaInicioComponent,
    CategoriaAgregarComponent,
    CategoriaEditarComponent,
    EstadisticasComponent,
    OfertasComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()


    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
