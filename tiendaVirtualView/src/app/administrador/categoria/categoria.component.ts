import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/dto/categoria';
import { CategoriaService } from './categoria.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [MessageService]
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  form: FormGroup;


  constructor(private categoriaService: CategoriaService,
              private fb: FormBuilder,
              private messageService: MessageService) {

    this.form = fb.group({
      id: new FormControl(null),
      nombre: [null, [Validators.minLength(2), Validators.maxLength(50), Validators.required]],
      estado: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    // this.crearCategorias();
    this.consultarCategorias();
   // this.actualizarCategorias();

  }

  actualizarCategorias() {

  }

  crearCategorias() {
    const categoria = new Categoria();
    categoria.nombre = this.form.get('nombre').value;
    categoria.estado = this.form.get('estado').value;
    categoria.descripcion = this.form.get('descripcion').value;
    this.categoriaService.crearCategoria(categoria).subscribe(
      data => {
        this.form.get('nombre').setValue('');
        this.form.get('estado').setValue('');
        this.form.get('descripcion').setValue('');
        this.consultarCategorias();
        this.messageService.add({severity: 'success', summary: 'Crear', detail: 'Registro creado con exíto'});
      }// catch(error ) => consol
    );


  }
  consultarCategorias() {
    this.categoriaService.consultarTodas().subscribe(
      data => {
        this.categorias = data;
        console.log(data);
      }
    );
  }

}
