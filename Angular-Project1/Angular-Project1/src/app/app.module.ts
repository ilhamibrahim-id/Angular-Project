import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { ServicesService } from './services.service';
import { ErrorrouteComponent } from './errorroute/errorroute.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { SuksesComponent } from './sukses/sukses.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddproductComponent,
    HomeComponent,
    ErrorrouteComponent,
    DetailproductComponent,
    AboutusComponent,
    ProductComponent,
    ContactusComponent,
    SuksesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
