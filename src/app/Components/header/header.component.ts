import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false
  userName = ''

  constructor(private ser: ProductsServiceService, private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe(status=> this.isLoggedIn = status);
    this.authService.username$.subscribe(username=> this.userName = username);
  }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
  }

}
