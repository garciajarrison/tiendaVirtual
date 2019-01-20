import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/dto/categoria';
import { CategoriaService } from './categoria.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private categorias: Categoria[];



  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    // this.crearCategorias();
    this.consultarCategorias();
   // this.actualizarCategorias();

  }

  actualizarCategorias() {

  }

  crearCategorias() {
    const categoria = new Categoria();
    categoria.nombre = 'Alex';
    categoria.estado = false;
    categoria.descripcion = 'Supremo de todos';
    this.categoriaService.crearCategoria(categoria).subscribe(
      data => {
        console.log(data);
      }
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
