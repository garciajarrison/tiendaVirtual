import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './administrador/categoria/categoria.component';

import { FacturaComponent } from './administrador/factura/factura.component';

// services
import {FacturaService } from './administrador/factura/factura.service';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';



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
    TableModule,
    ToastModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule
  ],
  providers: [
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
