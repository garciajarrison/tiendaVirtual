import { Injectable } from '@angular/core';
import { Factura } from 'src/app/dto/factura';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class FacturaService {
    url = 'http://localhost:8088/tiendaVirtual/factura/';

    constructor( private http: HttpClient){
        console.log('Servicio listo');
    }

    /**
     * Consultar por id
     */
    public consultarPorId(id: number):Observable<Factura> {
        return  this.http.get<Factura>(this.url + id )
        
    }

    /**
     * Consultar todos
     */
    public consultarTodas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(this.url);
        
    }
    /**
     * Crear registro Save
     */
    public crearFactura(factura: Factura): Observable<Factura> {
        return this.http.post<Factura>(this.url + 'crear/', factura);
        
    }

    /**
     * Crear registro Save
     */
    public eliminarFactura(id: number): Observable<Factura> {
        return this.http.delete<Factura>(this.url + 'borrar/'+ id);
        
    }


     /**
     * actualizar  registro
     */
    public actualizarFactura(factura:Factura): Observable<Factura> {
        return this.http.put<Factura>(this.url + 'actualizar/'+ factura.id, factura);
    }

    

    
}