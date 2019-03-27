import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './administrador/categoria/categoria.component';

import { FacturaComponent } from './administrador/factura/factura.component';

// services
import { FacturaService } from './administrador/factura/factura.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
// import { MensajeComponent } from './administrador/mensaje/mensaje.component';
// import { MisProductosComponent } from './administrador/mis-productos/mis-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    FacturaComponent
    // MensajeComponent,
    // MisProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    CalendarModule,
    MultiSelectModule,


  ],
  providers: [
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
