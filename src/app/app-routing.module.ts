import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './product/product';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component'

const routes: Routes = [
  {path:'products', component: ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  /*pathMatch eğer route kısmına hiçbir bi şey yazılmamışsa
    full olarak getir.
  */
  {path:'products/category/:categoryId',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
