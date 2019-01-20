import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/dto/categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private categorias: Categoria[];


  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.consultarCategorias();
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
