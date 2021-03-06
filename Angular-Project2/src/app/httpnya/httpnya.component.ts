import { Component, OnInit } from '@angular/core';
import { MahasiswaaService } from '../mahasiswaa.service';

@Component({
  selector: 'app-httpnya',
  templateUrl: './httpnya.component.html',
  styleUrls: ['./httpnya.component.css']
})
export class HttpnyaComponent implements OnInit {
  public mahasiswaas: any = [];
  public id: any | string;
  public cari: any | string;
  public namae: any | string;
  public age: any | string;
  public nim: any | string;
  constructor(private _mahasiswaService: MahasiswaaService) { }
  public errorMsg: any;
  async ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._mahasiswaService.getMahasiswa2().subscribe(
      (data: any) => {
        let newData = [];
        for(let key of Object.keys(data)) {
          let newObj = {
            ...data[key],
            uuid: key
          }
          newData.push(newObj);
        }
        this.mahasiswaas = newData;
      }, (error: any) => {
        this.errorMsg = error;
      }
    )
  }

  sembarang (){
    this._mahasiswaService.getMahasiswa2().subscribe(
      (data: any) => {
        let newData = [];
        for(let key of Object.keys(data)) {
          let newObj = {
            ...data[key],
            uuid: key
          }
          newData.push(newObj);
        }
        this.mahasiswaas = newData;
      }, (error: any) => {
        this.errorMsg = error;
      }
    )
  }
  removeItem(index: any){
    this.mahasiswaas.splice(index, 1);
  }
}
