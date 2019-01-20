import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './administrador/categoria/categoria.component';
<<<<<<< HEAD
import { FacturaComponent } from './administrador/factura/factura.component';

// services
import {FacturaService } from './administrador/factura/factura.service'
import { HttpClientModule } from '@angular/common/http';
=======
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
>>>>>>> upstream/master

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
