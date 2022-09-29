import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncentServiceService {

  offerImages : any = [1,2,3];
  constructor() { }
  getOffersAnnouncement(){
      return this.offerImages;
  }
}
