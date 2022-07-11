import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home/home.component';
import { ErrorrouteComponent } from './errorroute/errorroute.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SuksesComponent } from './sukses/sukses.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'addproduct',
    component: AddproductComponent,
  },{
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: DetailproductComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'sukses',
    component: SuksesComponent,
  },
  {
    path: '**',
    component: ErrorrouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
