import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: 'Contact', component: ContactUsComponent, canActivate: [AuthGuard]},
  {path: 'Products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'Product/:id', component: ProductDetailsComponent, canActivate: [AuthGuard]},
  {path: 'Login', component: UserLoginComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
