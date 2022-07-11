import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  sideKonten = ['konten'];
  ganti = {
    backgroundColor: 'grey',
    color: 'white',
  };
  title = 'Batoka Store';
  konfirmasi(){
    alert("Komentar Anda Telah Masuk");
  }
  public name: any | string;
  public deksripsi: any | string;
  public lempar = "Batoka Store";
  public message: any;
  public dataku: any;
  public cari: any;
  public date = new Date();
  disable = true;

  komentar = [{
    name: "ilham ibrahim",
    deksripsi: "webnya keren bro",
  }];

  addToArray(){
    var datsun = {
      name: this.name,
      deksripsi: this.deksripsi,

    };
    this.komentar.push(datsun);
    alert("Komentar Anda Telah Masuk");
    this.name = null;
    this.deksripsi = null;
  }
  public product: any = [];
  public errorMsg: any;
  getDat(event:any){
    this.dataku = event;
  }
  constructor(private _productservice: ServicesService) {}
  async ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._productservice.getProduct().subscribe(
      (data: any) => {
        let newData = [];
        for(let key of Object.keys(data)) {
          let newObj = {
            ...data[key],
            uuid: key
          }
          newData.push(newObj);
        }
        this.product = newData;
        console.log(this.product);
      }, (error: any) => {
        this.errorMsg = error;
      }
    )
  }
  carikun(){
    // $filter('filter')(myArray, {'id':73})
  }
}
