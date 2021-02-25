import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products"
  /*path globalde tanımlarsak herhangi bir adres değişikliğinde
    daha rahat kullanabiliriz.  
  */
  getProducts(categoryId): Observable<Product[]> {
    /*yukarıdaki kod  "observable design pattern'in" 
    bir implementasyonudur, subscribe metodu gelmeden
    sonlandırmaz.
    */

    let newPath = this.path;
    if (categoryId) {
      newPath = `${newPath}?categoryId=${categoryId}` // stringe çevirilmiş hali
    }

    /*aşağıdaki kullanılan get<Product[]> generic yapı, jsondan 
      gelen object veriyi map ederek kullanırız
    */
    return this.http
      .get<Product[]>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)

        /*pipe fonksiyonu birden fazla işlevi tek bir işlevde
          birleştirmemizi sağlar. örnek tap, catch error, subscribe
        */
      );

  }

  setProducts(product: Product):Observable<Product> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token',
      })
    }
    return this.http.post<Product>(this.path, product,httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)

    );
  }
  // Hata ayıklama
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu! ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata oluştu!';
    }
    return throwError(errorMessage);
  }
}
