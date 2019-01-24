import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/dto/factura';
import { FacturaService } from './factura.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  providers: [MessageService],
})
export class FacturaComponent implements OnInit {
  factura: Factura[];
  form: FormGroup;
  display = false;

  constructor(
    private facturaService: FacturaService,
    private fb: FormBuilder,
    private messagesService: MessageService
  ) {
    this.form = fb.group({
      id: new FormControl(null),
      fecha: [null, [Validators.required]],
      total: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.consultarFacturas();
  }

  showDialog() {
    this.display = true;
  }

  crearFactura() {
    const fact = new Factura();
    fact.fecha = new Date();
    fact.total = 15450;
    this.facturaService.crearFactura(fact).subscribe(data => {
      console.log(data);
      this.consultarFacturas();
    });
  }

  consultarFacturas() {
    this.facturaService.consultarTodas().subscribe(data => {
      this.factura = data;
      console.log(data);
    });
  }

  actualizarFactura(id: number) {
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

  eliminarFactura() {
    const id = 1;
    this.facturaService.eliminarFactura(id).subscribe(data => {
      console.log('Exito');
      this.consultarFacturas();
    });
  }
}
