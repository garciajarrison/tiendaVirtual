import { Injectable } from '@angular/core';

@Injectable()
export class FacturaService {
    url = 'http://localhost:8080/tiendaVirtual/factura/';

    constructor(){
        console.log('Servicio listo');
    }

    /**
     * Consultar por id
     */
    public consultarPorId() {
        
    }

    /**
     * Consultar todos
     */
    public consultarTodas() {
        
    }
    /**
     * Crear registro Save
     */
    public crearFactura() {
        
    }

    

    
}