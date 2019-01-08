import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'category/business',component: CategoryComponent },
    { path: 'category/sports',component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
