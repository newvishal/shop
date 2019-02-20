import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateCategoryComponent } from 'src/app/update-category/update-category.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellGraphComponent } from './sell-graph/sell-graph.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from 'src/app/auth.guard';
// import { AuthService } from 'src/app/auth.service';
const routes: Routes = [
  {path: '', component: AdminLoginComponent },
  {path: 'Login', component: AdminLoginComponent },
  {path: 'category', component: ProductCategoryComponent , canActivate: [AuthGuard]},
  {path: 'graph', component: SellGraphComponent , canActivate: [AuthGuard] },
  {path: 'updatecategory/:id', component: UpdateCategoryComponent , canActivate: [AuthGuard]},
  {path: 'addproduct', component: AddproductComponent , canActivate: [AuthGuard]},
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
