import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './common/app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListproductComponent,
    AddproductComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
