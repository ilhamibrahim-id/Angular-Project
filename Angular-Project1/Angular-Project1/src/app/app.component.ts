import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sideKonten = ['konten'];
  ganti = {
    backgroundColor: 'grey',
    color: 'white',
  };
  title = 'Batoka Store';
  public data = [
    {
      merk: 'Asus Rog',
      deskripsi:
        'laptop mahal rog pasti semua kepengen hayo gaming yo masuk luancar rtx juga nih genshin impact luancar jaya jos',
        harga: '10000000',
    },
    {
      merk: 'Alien Ware',
      deskripsi:
        'laptop mahal rog pasti semua kepengen hayo gaming yo masuk luancar rtx juga nih genshin impact luancar jaya jos',
        harga: '9000000',
    },
    {
      merk: 'Asus Tuff',
      deskripsi:
        'laptop mahal rog pasti semua kepengen hayo gaming yo masuk luancar rtx juga nih genshin impact luancar jaya jos',
        harga: '20000000',
    },
    {
      merk: 'Msi',
      deskripsi:
        'laptop mahal rog pasti semua kepengen hayo gaming yo masuk luancar rtx juga nih genshin impact luancar jaya jos',
        harga: '30000000',
    },
  ];
  konfirmasi(){
    alert("Komentar Anda Telah Masuk");
  }
  public name: any | string;
  public deksripsi: any | string;
  public lempar = "Batoka Store";
  public message: any;
  public dataku: any;
  getDat(event:any){
    this.dataku = event;
  }
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
    console.log(this.komentar);
  }
}
