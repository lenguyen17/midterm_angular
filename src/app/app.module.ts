import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { ListproductComponent } from './pages/product/listproduct/listproduct.component';
import { SidebarComponent } from './pages/layouts/sidebar/sidebar.component';
import { HeaderComponent } from './pages/layouts/header/header.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    LoginComponent,
    AddproductComponent,
    ListproductComponent,
    SidebarComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
