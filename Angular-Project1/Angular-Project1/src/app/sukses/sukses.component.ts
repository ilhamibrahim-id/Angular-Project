import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sukses',
  templateUrl: './sukses.component.html',
  styleUrls: ['./sukses.component.css']
})
export class SuksesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(function(){
      window.location.href = '/';
   }, 2500);
  }

}
