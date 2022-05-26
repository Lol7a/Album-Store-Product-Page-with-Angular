import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './album';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: HttpClient) {}

  getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .pipe(map((response) => <Album>response));
    // return this._http.get<any>(this._albumUrl).pipe(
    //   map((response: Response) => {
    //     return response;
    //   })
    // );
    // .subscribe((response) => {
    //   return response.json();
    // });
  }

  getProducts(): Observable<Product[]> {
    return this._http
      .get(this._productsUrl)
      .pipe(map((response) => <Product[]>response));
  }
}
