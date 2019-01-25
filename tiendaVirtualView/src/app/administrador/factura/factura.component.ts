import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/dto/factura';
import { FacturaService } from './factura.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/primeng';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [MessageService, MultiSelectModule, CalendarModule],
})



export class FacturaComponent implements OnInit {
  factura: Factura[];
  form: FormGroup;
  display = false;
  value: Date;

  constructor(private facturaService: FacturaService,
    private fb: FormBuilder,
    private messageService: MessageService) {
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

  crearFacturas() {
    const fact = new Factura();
    fact.fecha = this.form.get('fecha').value;
    fact.total = this.form.get('total').value;
    this.facturaService.crearFactura(fact).subscribe(
      data => {
        this.form.get('fecha').setValue('');
        this.form.get('total').setValue('');
      console.log(data);
      this.consultarFacturas();
      this.messageService.add({severity: 'success', summary: 'Crear', detail: 'Registro creado con exito'});
    });
  }

  consultarFacturas() {
    this.facturaService.consultarTodas().subscribe(data => {
      this.factura = data;
      console.log(data);
    });
  }

  // actualizarFactura(id: number) {
  // alert(id);
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
  // }

  // eliminarFactura() {
  //   const id = 1;
  //   this.facturaService.eliminarFactura(id).subscribe(data => {
  //     console.log('Exito');
  //     this.consultarFacturas();
  //   });
  // }
}
