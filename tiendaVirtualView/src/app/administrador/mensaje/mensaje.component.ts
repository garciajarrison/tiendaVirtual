// import { Component, OnInit } from '@angular/core';
// import { Mensaje } from 'src/app/dto/mensaje';
// // import { CategoriaService } from './categoria.service';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MessageService } from 'primeng/components/common/messageservice';


// @Component({
//   selector: 'app-mensaje',
//   templateUrl: './mensaje.component.html',
//   providers: [MessageService]
// })
// export class MensajeComponent implements OnInit {
//   mensaje: Mensaje[];
//   form: FormGroup[];


//   constructor(
//     private mensajeService: MessageService,
//             private fb: FormBuilder,
//             private messageService: MessageService) {
    
//     this.form = fb.group({
//       id: new FormControl(null),
//       mensaje:[null, [Validators.required]],
//       valoracion:[null, [Validators.required]],
//     });
//   }

//   ngOnInit() {
//     this.consutarMensajes();
//   }

//   consutarMensajes() {

//   }

// }
