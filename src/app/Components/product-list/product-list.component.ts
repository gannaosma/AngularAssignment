import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';
import { ProductsServiceService } from 'src/app/ٍServices/products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  IsPurshased: boolean;
  productList: IProduct[] = []

  @Input() selectedCategory: number = 0;
  @Output() addToCart: EventEmitter<IShoppingCartItems>

  constructor(private ser:ProductsServiceService) { 
    this.IsPurshased = true,
    this.addToCart = new EventEmitter<IShoppingCartItems>()
    ser = new ProductsServiceService()
  }

  get filteredProducts(){
    return this.selectedCategory
      ? this.productList.filter(product => product.CategoryID == this.selectedCategory)
      : this.productList;
  }

  // getProductsByCategory(categoryID: number): any[] {
  //   return categoryID
  //     ? this.productList.filter(product => product.CategoryID == categoryID)
  //     : this.productList;
  // }

  decreaseQuantity(count: HTMLInputElement, item: any){
    var currentQuantity = parseInt(count.value, 10);

    if (currentQuantity > 0)
      count.value = (currentQuantity-1).toString();
  }

  increaseQuantity(count: HTMLInputElement, item: any){
    var currentQuantity = parseInt(count.value, 10);

    if (currentQuantity < item.Quantity)
      count.value = (currentQuantity+1).toString();
  }

  PurshaseOrNot(item: any, count: HTMLInputElement) {
    const selectedQuantity = parseInt(count.value, 10);

    if (selectedQuantity > 0 && item.Quantity >= selectedQuantity) {
      const cartItem: IShoppingCartItems = {
        ProductID: item.ID,
        ProductName: item.Name,
        UnitPrice: item.Price,
        SelectedQunatity: selectedQuantity
      };

      // Emit to parent
      this.addToCart.emit(cartItem)
    }
  }

  // navigate(productId:number){
  //   console.log(productId)
  // }

  ngOnInit(): void {
    this.productList = this.ser.getAllProducts()
  }

}
