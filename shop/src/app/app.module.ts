import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CategoryService } from "./service/category.service";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import * as $ from 'jquery';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellGraphComponent } from './sell-graph/sell-graph.component';
import { ChartModule } from 'angular2-chartjs';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthService } from 'src/app/auth.service';

// import { AuthGuard } from './auth.guard';
// import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryComponent,
    MenuComponent,
    PagenotfoundComponent,
    UpdateCategoryComponent,
    AddproductComponent,
    SellGraphComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    HttpClientModule,
    ChartModule,
    // FormsModule,
    [BrowserModule , NgxPaginationModule , BrowserAnimationsModule, ToastrModule.forRoot()]
   
  ],
  providers: [CategoryService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
