import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HoverShodowDirective } from './Directives/hover-shodow.directive';
import { EgyptianIDDatePipe } from './Pipe/egyptian-iddate.pipe';
import { CreditformatPipe } from './Pipe/creditformat.pipe';
import { CreditFormatDirective } from './Directives/credit-format.directive';
import { ProductListComponent } from './Components/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SidebarComponent,
    HoverShodowDirective,
    EgyptianIDDatePipe,
    CreditformatPipe,
    CreditFormatDirective,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
