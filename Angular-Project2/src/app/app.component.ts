import { Component } from '@angular/core';
import { MahasiswaaService } from './mahasiswaa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Angular-Project2';
  public mahasiswaas: any = [];

  constructor(private _mahasiswaSevirce: MahasiswaaService) {

  }
  ngOnInit(): void {
      this.mahasiswaas = this._mahasiswaSevirce.getMahasiswaas();
  }
  public id: any | string;
  public namae: any | string;
  public age: any | string;
  public nim: any | string;
  addToArray(){
    var datsun = {
      id: this.id,
      Nama: this.namae,
      Age: this.age,
      Nim: this.nim
    };
    this.mahasiswaas.push(datsun);
    alert("Mahasiswa Berhasil Ditambahkan");
    this.id = null;
    this.namae = null;
    this.age = null;
    this.nim = null;
  }
  public id2: any | string;
  public namae2: any | string;
  public age2: any | string;
  public nim2: any | string;
  addToArray2(){
    const datsun = {
      id2: this.id2,
      namae2: this.namae2,
      age2: this.age2,
      nim2: this.nim2
    };
    this._mahasiswaSevirce.postMahasiswa2(datsun).subscribe(responData => {
      console.log(responData);
    });
    alert("Mahasiswa Berhasil Ditambahkan");
    window.location.reload();
    this.id2 = null;
    this.namae2 = null;
    this.age2 = null;
    this.nim2 = null;
  }
  }
