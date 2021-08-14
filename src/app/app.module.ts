import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HomeContentComponent } from './dashboard/home-content/home-content.component';
import { CarouselComponent } from './dashboard/home-content/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CategoryComponent } from './dashboard/home-content/category/category.component';
import { GamePlayComponent } from './dashboard/home-content/game-play/game-play.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    CarouselComponent,
    CategoryComponent,
    GamePlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    SwiperModule,
    NgxScrollTopModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
