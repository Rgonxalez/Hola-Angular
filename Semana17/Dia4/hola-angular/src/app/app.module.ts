import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ProductoComponent} from './Components/Producto/producto.component'

@NgModule({
  // Aqui se registran a todos los componentes del modulo APP
  declarations: [
    AppComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
