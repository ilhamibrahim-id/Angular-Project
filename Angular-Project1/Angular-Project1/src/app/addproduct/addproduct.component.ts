import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private _productService: ServicesService) {
  }

  public merk2: any | string;
  public harga2: any | string;
  public deksripsi2: any | string;
  addToArray(){
    const datsun = {
      merk: this.merk2,
      harga: this.harga2,
      deksripsi: this.deksripsi2,
    };
    this._productService.postProduct(datsun).subscribe(responData => {
      console.log(responData);
    });
    alert("product Berhasil Ditambahkan");
    this.merk2 = null;
    this.harga2 = null;
    this.deksripsi2 = null;
  }

}
