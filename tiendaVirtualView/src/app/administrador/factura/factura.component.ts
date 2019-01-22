import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/dto/factura';
import { FacturaService } from './factura.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {

  private factura: Factura[];
  display: boolean = false;


  constructor( private facturaService:FacturaService) { 
    console.log("constructor components ")
  }

  ngOnInit() {
    this.consultarFacturas();
  }


    showDialog() {
        this.display = true;
    }

  crearFactura(){
    const fact = new Factura();
    fact.fecha = new Date();
    fact.total = 15450;
    this.facturaService.crearFactura(fact).subscribe(
      data => {
        console.log(data);
        this.consultarFacturas();
      }
    )

  }
  
  consultarFacturas(){
    this.facturaService.consultarTodas().subscribe(
      data => {
        this.factura = data;
        console.log(data);
      }
    )
  }

  actualizarFactura( id:number ){
    alert(id);
    // const fact = new Factura();
    // fact.id = 4;
    // fact.fecha = new Date();
    // fact.total = 20000;
    // this.facturaService.actualizarFactura(fact).subscribe(
    //   data => {
    //     console.log('Guardado');
    //     this.consultarFacturas();

    //   }
      
    // )

  }

  eliminarFactura(){
    const id = 1;
    this.facturaService.eliminarFactura(id).subscribe(
      data => {
        console.log('Exito');
        this.consultarFacturas();

      }
    )
  }

}
