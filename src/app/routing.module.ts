import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './product/add-product.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "add-product", component: AddProductComponent },
      { path: " ", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])],
    exports: [RouterModule]
})
export class RoutingModule { }
