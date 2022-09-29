import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { CardComponent } from './card/card.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CarouselComponentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
