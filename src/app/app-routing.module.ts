import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';

const routes: Routes = [
  {
    path: '',
    component: ListproductComponent
  },
  {
    path: 'product/add',
    component: AddproductComponent
  },
  {
    path: 'product/edit/:id',
    component: AddproductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
