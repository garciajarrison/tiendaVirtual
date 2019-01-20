import { Component, OnInit } from '@angular/core';

import { FacturaService } from './factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {

  constructor( private _facturaService:FacturaService) { 
    console.log("constructor components ")
  }

  ngOnInit() {
  }

}
