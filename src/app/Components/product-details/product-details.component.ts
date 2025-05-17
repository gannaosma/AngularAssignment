import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductsServiceService } from 'src/app/ٍServices/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId!: number;
  product: IProduct| null = null;
  productIDSList: number[] = [];
  currentIndex: number = -1;

  constructor(private activatedRoute:ActivatedRoute
            ,private service: ProductsServiceService
            ,private loction: Location
            ,private router: Router) 
  {

  }
  
  goBack()
  {
    this.loction.back()
  }

  previous(){
    if(this.currentIndex > 0){
      this.currentIndex--;
      this.productId = this.productIDSList[this.currentIndex]
      this.router.navigate(['/Product', this.productId])
    }
  }

  next(){
    if(this.currentIndex < this.productIDSList.length-1)
    {
      this.currentIndex++;
      this.productId = this.productIDSList[this.currentIndex]
      this.router.navigate(['/Product', this.productId]) 
    }
  }

  ngOnInit(): void {
    this.productIDSList = this.service.getProductIDSList();

    this.activatedRoute.paramMap.subscribe(params =>{
      this.productId = Number(params.get('id'));
      this.product = this.service.getProductById(this.productId) ?? null;
      this.currentIndex = this.productIDSList.indexOf(this.productId);
    })
  }

}
