import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HomeContentComponent } from './dashboard/home-content/home-content.component';
import { FeatureGamesComponent } from './dashboard/home-content/feature-games/feature-games.component';
import { LeaderBoardGamesComponent } from './dashboard/home-content/leader-board-games/leader-board-games.component';
import { CategoriesComponent } from './dashboard/home-content/categories/categories.component';
import { CarouselComponent } from './dashboard/home-content/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { SportsComponent } from './dashboard/home-content/categories/sports/sports.component';
import { PuzzleComponent } from './dashboard/home-content/categories/puzzle/puzzle.component';
import { StrategyComponent } from './dashboard/home-content/categories/strategy/strategy.component';
import { AdventureComponent } from './dashboard/home-content/categories/adventure/adventure.component';
import { MemoryComponent } from './dashboard/home-content/categories/memory/memory.component';
import { ActionComponent } from './dashboard/home-content/categories/action/action.component';
import { BoardComponent } from './dashboard/home-content/categories/board/board.component';
import { CardComponent } from './dashboard/home-content/categories/card/card.component';
import { EducationalComponent } from './dashboard/home-content/categories/educational/educational.component';
import { FamilyComponent } from './dashboard/home-content/categories/family/family.component';
import { MultiplayerComponent } from './dashboard/home-content/categories/multiplayer/multiplayer.component';
import { WordComponent } from './dashboard/home-content/categories/word/word.component';
import { RecommendedgamesComponent } from './dashboard/home-content/recommendedgames/recommendedgames.component';
import { PopulargamesComponent } from './dashboard/home-content/populargames/populargames.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';

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
    CarouselComponent,
    SportsComponent,
    PuzzleComponent,
    StrategyComponent,
    AdventureComponent,
    MemoryComponent,
    ActionComponent,
    BoardComponent,
    CardComponent,
    EducationalComponent,
    FamilyComponent,
    MultiplayerComponent,
    WordComponent,
    RecommendedgamesComponent,
    PopulargamesComponent
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
