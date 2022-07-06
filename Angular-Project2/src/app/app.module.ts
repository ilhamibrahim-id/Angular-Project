import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaaService } from './mahasiswaa.service';
import { HttpnyaComponent } from './httpnya/httpnya.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HttpnyaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MahasiswaaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
