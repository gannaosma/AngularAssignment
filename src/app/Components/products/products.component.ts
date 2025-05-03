import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/DiscountOffers';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  discount: DiscountOffers;
  store: Store;
  clientName: string;
  DiscountOffers = DiscountOffers;
  OrderDate: Date;

  category: ICategory[];
  selectedCategory: number = 0;
  shoppingCart: IShoppingCartItems[] = []
  totalPrice:number = 0

  @ViewChild('selectedItem') selectedItemCategory!: ElementRef

  constructor() { 
    this.discount = DiscountOffers.TenPercent,
    this.store = new Store('Dream2000', ['Cairo, Alex, Damietta'], 'https://picsum.photos/60/60'),
    this.clientName = 'ganna osama',
    this.category = [
      { ID: 1, Name: 'Smartphone' },
      { ID: 2, Name: 'Laptop' },
      { ID: 3, Name: 'Headphones' },
      { ID: 4, Name: 'TV' }
    ],
    this.OrderDate = new Date()
  }
  ngAfterViewInit(): void {
    console.log(this.selectedItemCategory.nativeElement.value)
  }

  handleAddToCart(cartItem: IShoppingCartItems): void{
    var existingItem = this.shoppingCart.find(i => i.ProductID === cartItem.ProductID);

    if(existingItem)
      existingItem.SelectedQunatity = cartItem.SelectedQunatity
    else
      this.shoppingCart.push(cartItem)
  }

  RemoveFromCart(productId: number){
    this.shoppingCart = this.shoppingCart.filter(item => item.ProductID !== productId);
  }

  updateTotalPrice() {
    this.totalPrice = this.shoppingCart.reduce((sum, item) => sum + item.SelectedQunatity * item.UnitPrice, 0);
  }

  decQuantity(){
  }

  ngOnInit(): void {
  }

}
