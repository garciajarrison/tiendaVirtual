import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './administrador/categoria/categoria.component';
import { FacturaComponent } from './administrador/factura/factura.component';

// services
import {FacturaService } from './administrador/factura/factura.service'
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    FacturaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
