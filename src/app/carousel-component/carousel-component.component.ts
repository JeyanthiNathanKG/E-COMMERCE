import { AnnouncentServiceService } from './../services/announcent-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent implements OnInit {
  images = [944, 1011,984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {
   }

  ngOnInit(): void {
  }

}
