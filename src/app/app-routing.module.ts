import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';
import { LoginComponent } from './pages/login/login.component';
import { ListproductComponent } from './pages/product/listproduct/listproduct.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { authGuard } from './common/guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'register',
    component: RegisterComponent
  },



  // Product routing
  {
    path: 'product',
    component: ListproductComponent,
    canActivate: [authGuard],
  },
  {
    path: 'product/add',
    canActivate: [authGuard],
    component: AddproductComponent
  },
  {
    path: 'product/edit/:id',
    canActivate: [authGuard],
    component: AddproductComponent
  },
  {
    path: 'store',
    canActivate: [authGuard],
    component: StoreComponent,
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
