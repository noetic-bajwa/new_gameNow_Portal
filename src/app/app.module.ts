import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HomeContentComponent } from './dashboard/home-content/home-content.component';
import { FeatureGamesComponent } from './dashboard/home-content/feature-games/feature-games.component';
import { LeaderBoardGamesComponent } from './dashboard/home-content/leader-board-games/leader-board-games.component';
import { CategoriesComponent } from './dashboard/home-content/categories/categories.component';
import { CarouselComponent } from './dashboard/home-content/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    FeatureGamesComponent,
    LeaderBoardGamesComponent,
    CategoriesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
