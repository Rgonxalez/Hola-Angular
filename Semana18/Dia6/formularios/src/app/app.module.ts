import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importando el modulo HTTP

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import {Rutas} from './app.routes';
import { HttpClient } from 'selenium-webdriver/http';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { VerFacturaComponent } from './components/ver-factura/ver-factura.component';

//Importamos el modulo de los Formularios
//para tener la posibilidad de Usar [{ngModel}]
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacturasComponent,
    HomeComponent,
    ErrorComponent,
    CrearFacturaComponent,
    VerFacturaComponent
  ],
  imports: [
    BrowserModule,
    Rutas,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
