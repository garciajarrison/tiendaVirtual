import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/dto/factura';
import { FacturaService } from './factura.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/primeng';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [MessageService, MultiSelectModule, CalendarModule, DatePipe],
})



export class FacturaComponent implements OnInit {

  //VARIABLES
  factura: Factura[];
  facturaEditT: any;
  value: Date;
  doC = new Date();

  // datex: new Date(this.contentTranslate.StartDate);

  // OBJETO
  dataObj: Object= {
    id:0,
    fecha: '01/15/1985',
    total:5600
  }

  // FORMULARIOS
  form: FormGroup;
  forma: FormGroup;

  // MODAL
  display = false;
  

  constructor(private datePipe: DatePipe, private facturaService: FacturaService,
    private fb: FormBuilder,
    private messageService: MessageService) {

// formulario registro
    this.form = fb.group({
      id: new FormControl(null),
      fecha: [null, [Validators.required]],
      total: [null, [Validators.required]],
    });

// formulario modal
    this.forma = new FormGroup({
      'fechaEdit': new FormControl(''),
      'totalEdit': new FormControl(''),

    })
  }

  ngOnInit() {
    this.consultarFacturas();
  }

  showDialog() {
    this.display = true;
  }
// modulo completo
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
// modulo completo
  consultarFacturas() {
    this.facturaService.consultarTodas().subscribe(data => {
      this.factura = data;
      console.log(data);
    });
  }

  // modulo consulta por id
  consultarId(id: number){
          this.facturaService.consultarPorId(id).subscribe(data => {
            this.dataObj['fecha'] = this.convertirFecha(data.fecha);
            this.dataObj['total'] = data.total;
            console.log(this.dataObj);
          });
    console.log(this.datePipe.transform(this.doC, this.dataObj['fecha'] ))


    this.showDialog();//abro el modal

  }

  convertirFecha(dateIt:any){

    console.log('fechaBd '+dateIt);
    let myFecha = this.datePipe.transform(this.doC, dateIt)
    return myFecha;

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
