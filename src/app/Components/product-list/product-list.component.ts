import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  category: ICategory[];
  selectedCat: number = 0;
  IsPurshased: boolean;
  productList: IProduct[];

  constructor() { 
    this.category = [
      {ID: 1, Name: 'Smartphone'},
      {ID: 2, Name: 'Laptop'},
      {ID: 3, Name: 'Headphones'},
      {ID: 4, Name: 'TV'}
    ],
    this.IsPurshased = true,
    this.productList = [
      {ID: 1, Name: 'Laptop', Quantity: 10, Price: 15000, Img: 'https://picsum.photos/100/60', CategoryID: 2},
      {ID: 2, Name: 'Iphon', Quantity: 1, Price: 8000, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 3, Name: 'Headphones', Quantity: 0, Price: 30, Img: 'https://picsum.photos/100/60', CategoryID: 3},
      {ID: 4, Name: 'Sony', Quantity: 6, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 7, Name: 'OOPO', Quantity: 1, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 5, Name: 'Air Pod', Quantity: 2, Price: 20, Img: 'https://picsum.photos/100/60', CategoryID: 3},
      {ID: 6, Name: 'Think Pad', Quantity: 0, Price: 100, Img: 'https://picsum.photos/100/60', CategoryID: 2}
      
    ];
  }

  get filteredProducts() {
    return this.selectedCat
      ? this.productList.filter(product => product.CategoryID == this.selectedCat)
      : this.productList;
  }

  PurshaseOrNot(item: any) {
    if (item.Quantity > 0) {
      item.Quantity--;
    }
  }

  ngOnInit(): void {
  }

}
