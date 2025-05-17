import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/ٍServices/products-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ser: ProductsServiceService) { }

  ngOnInit(): void {
  }

}
