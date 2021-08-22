import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { GamePlayComponent } from './game-play/game-play.component';

console.warn("New category module Loaded")
@NgModule({
  declarations: [
    CategoryComponent,
    GamePlayComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
