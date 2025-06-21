import { Injectable } from '@angular/core';
import { interval, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList: string[]
  constructor() { 
    this.adsList =[
      "Black Friday Deals",
      "White Friday Specials",
      "Up to 50% Off",
      "Huge Discounts",
      "Limited Time Offers",
      "Exclusive Online Sale",
      //"",
      "End of Season Clearance",
      "Buy One Get One Free",
      "Weekend Mega Sale",
      "Flash Sale Now Live"
    ];
  }

  getAllServices(intervalSec: number){
    return new Observable<string>((observer)=>{
      let counter = 0;
      let adsTimer = setInterval(()=>{
        if(counter >= this.adsList.length)
        {
          observer.complete();
        }

        if(this.adsList[counter] === ""){
          observer.error("Empty Ad");
        }

        observer.next(this.adsList[counter])
        counter++
      }, intervalSec*1000);

      return ()=>{
        clearInterval(adsTimer);
      }
    })
  }

}
