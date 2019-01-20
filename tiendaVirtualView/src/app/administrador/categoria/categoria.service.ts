import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/dto/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = 'http://localhost:8088/tiendaVirtual/categoria/';

  constructor(private http: HttpClient) { }

  public consultarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.url + id);
  }

  public consultarTodas(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  public crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url + 'crear/', categoria);
  }

  public updateNote(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.url + categoria.id, categoria);
  }

}
