import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input('parentData') public title2: any;
  // balik(){
  //   this.childEvent.emit("batoka store");
  // }
  logo = 'assets/logo.png';
  sizeLogo = {
    width: "10%",
    display: "block",
    float: "right",
  };
  public date = new Date();
  ngOnInit(): void {

  }
}
