import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardItemsService {
   items = [
    {
      imageUrl:
        'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg',
      title: 'IPhone 14',
      description:
        'iPhone has the functionality of a mobile phone, portable media player, game console ',
      price: '1500',
      quantity: 0,
    },
    {
      imageUrl:
        'https://assets.mspimages.in/wp-content/uploads/2021/04/oneplus_9r_product_shots_6.jpg',
      title: 'Oneplus 9R',
      description:
        'iPhone has the functionality of a mobile phone, portable media player, game console',
      price: '500',
      quantity: 0,
    },
    {
      imageUrl:
        'https://imageio.forbes.com/specials-images/imageserve/6213c2a05ed1f7de596d35b4/Apple-Brand-M1-Model-Macbook-pro-with-colorful-light-background-/960x0.jpg?format=jpg&width=960',
      title: 'Macbook Pro',
      description:
        'iPhone has the functionality of a mobile phone, portable media player, game console',
      price: '650',
      quantity: 0,
    },
    {
      imageUrl:
        'http://www.phonebunch.com/news-images/2020/07/Oneplus-tv-55U1-06-phonebunch.jpg',
      title: 'Oneplus Tv',
      description:
        'iPhone has the functionality of a mobile phone, portable media player, game console',
      price: '550',
      quantity: 0,
    },
    {
      imageUrl:
        'http://www.phonebunch.com/news-images/2020/07/Oneplus-tv-55U1-06-phonebunch.jpg',
      title: 'Oneplus Tv',
      description:
        'iPhone has the functionality of a mobile phone, portable media player, game console',
      price: '550',
      quantity: 0,
    },
    {
      id:5,
      imageUrl:
        'http://www.phonebunch.com/news-images/2020/07/Oneplus-tv-55U1-06-phonebunch.jpg',
      title: 'Oneplus Tv',
      description:
        'iPhone has the functionality of a mobile phone, portable media player, game console',
      price: '550',
      quantity: 0,
    },
  ];

  constructor() { }
  getItems(){
    return  this.items 
  }
}
