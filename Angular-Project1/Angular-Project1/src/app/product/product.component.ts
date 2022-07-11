import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public product: any= [];
  public errorMsg: any;
  public selectedId: any;
  constructor(private _productservice: ServicesService, private router: Router,
    private activatedRoute: ActivatedRoute) {}
  async ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._productservice.getProduct().subscribe(
      (data: any) => {
        let newData = [];
        for (let key of Object.keys(data)) {
          let newObj = {
            ...data[key],
            uuid: key,
          };
          newData.push(newObj);
        }
        this.product = newData;
        console.log(this.product);
      },
      (error: any) => {
        this.errorMsg = error;
      }
    );
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // let strIds: string = params.get('id') as string;
      // let arrIds: any = strIds.split(',').map((x: string) => parseInt(x));
      // console.log(arrIds);
      let id = parseInt(params.get('id') as string);
      this.selectedId = id;
    })
  }
  // cari() {
  // let found = [];
  // const searchTerm = 'Eight Line1';
  // found = this.product.key.filter(function(element : any) {
  //   return element.name.toLowerCase() == searchTerm.toLowerCase();
  // });

  // console.log('found ' , found[0]);
  // }
  onSelect(product: any) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([product.id], {relativeTo: this.activatedRoute});
  }
  isSelected(product: any) {
    return product.id === this.selectedId;
  }
}
