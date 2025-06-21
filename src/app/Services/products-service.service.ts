import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private productList: IProduct[]
  constructor() { 
    this.productList = [
      {ID: 1, Name: 'Laptop', Quantity: 10, Price: 15000, Img: 'https://picsum.photos/100/60', CategoryID: 2},
      {ID: 2, Name: 'Iphon', Quantity: 1, Price: 8000, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 3, Name: 'Headphones', Quantity: 0, Price: 30, Img: 'https://picsum.photos/100/60', CategoryID: 3},
      {ID: 4, Name: 'Sony', Quantity: 6, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 1},
      {ID: 5, Name: 'OOPO', Quantity: 1, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 4},
      {ID: 6, Name: 'Air Pod', Quantity: 2, Price: 20, Img: 'https://picsum.photos/100/60', CategoryID: 3},
      {ID: 7, Name: 'Think Pad', Quantity: 0, Price: 100, Img: 'https://picsum.photos/100/60', CategoryID: 2}
    ];
  }

  getAllProducts(): IProduct[]{
    return this.productList;
  }

  getProductById(productID: number){
    return this.productList.find(p => p.ID == productID)
  }

  getProductBYCategoryId(categoryID: number): IProduct[]{
    return this.productList.filter(p => p.CategoryID == categoryID)
  }

  getProductIDSList(){
    return this.productList.map(p => p.ID)
  }
}
