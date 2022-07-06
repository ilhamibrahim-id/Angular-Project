import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMahasiswa } from './mahasiswa';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaaService {

  constructor(private http:HttpClient) { }

  getMahasiswaas(){
    return [
    {"id": 1, "Nama": "Ilham Ibrahim", "Age": 22, "Nim": 1941720180},
    {"id": 2, "Nama": "Awang Syukriansah Dirgantoro", "Age": 22, "Nim": 1941720065},
    {"id": 3, "Nama": "Rizqita Siska Rohmatullah", "Age": 22, "Nim": 1941720157},
    {"id": 4, "Nama": "Helmi Andika", "Age": 21, "Nim": 1941720134}
  ];
  }
  private _url: string = "https://angular-17820-default-rtdb.firebaseio.com/oke.json"
  getMahasiswa2() {
    return this.http.get(this._url).pipe(
      catchError(this.errorHttpHandler)
    );
  }
  postMahasiswa2(data: {
    id2: number; namae2: string; age2: string; nim2: string;
  }) {
    return this.http.post(this._url,data).pipe(
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
}
