import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';


import { GamePlayComponent } from './game-play/game-play.component';

const routes: Routes = [{ 
   path: '', component:CategoryComponent ,
    
  },
  {path:':gameId',component:GamePlayComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
