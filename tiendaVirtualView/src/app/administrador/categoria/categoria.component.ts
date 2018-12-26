import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/dto/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private categorias: Array<Categoria>;


  constructor() { }

  ngOnInit() {
    this.consultarCategorias();
  }

  consultarCategorias(){
    this.categorias = new Array<Categoria>();
    
  }

}
