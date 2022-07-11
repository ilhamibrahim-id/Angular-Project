import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  IProduct } from './product'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public product: any = [];
  constructor(private http:HttpClient) { }
  private _url: string = "https://angular2-35fb2-default-rtdb.firebaseio.com/product.json"
  getProduct () {
    return this.http.get(this._url).pipe(
      catchError(this.errorHttpHandler)
    );
  }
  errorHttpHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  postProduct(data: {
    merk: string; harga: string; deksripsi: string;
  }) {
    return this.http.post(this._url,data).pipe(
      catchError(this.errorHttpHandler)
    );
  }
}
