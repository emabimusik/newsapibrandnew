import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RemovePipe} from './uniques.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavbarComponent, RemovePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
