import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/DiscountOffers';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers;
  store: Store;
  clientName: string;
  productList: IProduct[];
  DiscountOffers = DiscountOffers;
  selectedCat: number = 0;
  OrderDate: Date

  constructor() { 
    this.discount = DiscountOffers.TenPercent,
    this.store = new Store('Dream2000', ['Cairo, Alex, Damietta'], 'https://picsum.photos/60/60'),
    this.clientName = 'ganna osama',
    this.productList = [
      {ID: 1, Name: 'Laptop', Quantity: 10, Price: 15000, Img: 'https://picsum.photos/100/60', CategoryID: 2},
      {ID: 2, Name: 'Iphon', Quantity: 1, Price: 8000, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 3, Name: 'Headphones', Quantity: 0, Price: 30, Img: 'https://picsum.photos/100/60', CategoryID: 3},
      {ID: 4, Name: 'Sony', Quantity: 6, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 7, Name: 'OOPO', Quantity: 1, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 5, Name: 'Air Pod', Quantity: 2, Price: 20, Img: 'https://picsum.photos/100/60', CategoryID: 3},
      {ID: 6, Name: 'Think Pad', Quantity: 0, Price: 100, Img: 'https://picsum.photos/100/60', CategoryID: 2}
      
    ];

    this.OrderDate = new Date()
  }

  get filteredProducts() {
    return this.selectedCat
      ? this.productList.filter(product => product.CategoryID == this.selectedCat)
      : this.productList;
  }

  decQuantity(){

  }


  ngOnInit(): void {
  }

}
