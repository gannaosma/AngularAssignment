  import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
  import { ICategory } from 'src/app/ViewModels/icategory';
  import { IProduct } from 'src/app/ViewModels/iproduct';
  import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';

  @Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
  })
  export class ProductListComponent implements OnInit {
    IsPurshased: boolean;
    productList: IProduct[];

    @Input() selectedCategory: number = 0;
    @Output() addToCart: EventEmitter<IShoppingCartItems>

    constructor() { 
      this.IsPurshased = true,
      this.productList = [
        {ID: 1, Name: 'Laptop', Quantity: 10, Price: 15000, Img: 'https://picsum.photos/100/60', CategoryID: 2},
        {ID: 2, Name: 'Iphon', Quantity: 1, Price: 8000, Img: 'https://picsum.photos/100/60', CategoryID: 1},
        {ID: 3, Name: 'Headphones', Quantity: 0, Price: 30, Img: 'https://picsum.photos/100/60', CategoryID: 3},
        {ID: 4, Name: 'Sony', Quantity: 6, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 1},
        {ID: 7, Name: 'OOPO', Quantity: 1, Price: 80, Img: 'https://picsum.photos/100/60', CategoryID: 4},
        {ID: 5, Name: 'Air Pod', Quantity: 2, Price: 20, Img: 'https://picsum.photos/100/60', CategoryID: 3},
        {ID: 6, Name: 'Think Pad', Quantity: 0, Price: 100, Img: 'https://picsum.photos/100/60', CategoryID: 2}
      ];
      this.addToCart =new EventEmitter<IShoppingCartItems>()
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

    ngOnInit(): void {
    }

  }
