import { Component, OnInit } from '@angular/core';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 currentAd: string = ''

  constructor(private service: PromotionAdsService) { }

  ngOnInit(): void {
    this.service.getAllServices(3).subscribe({
      next:(data: string)=>{
        this.currentAd = data
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("All Ads are displayed")
      }
    })
  }

}
