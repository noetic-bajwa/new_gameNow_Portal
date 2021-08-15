import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './dashboard/home-content/category/category.component';
import { GamePlayComponent } from './dashboard/home-content/game-play/game-play.component';
import { HomeContentComponent } from './dashboard/home-content/home-content.component';

const routes: Routes = [
  { 
  path:'',component:DashboardComponent ,children:[
    {path:'',component:HomeContentComponent},
    {path:':category',component:CategoryComponent},
    {path:':category/:gameId',component:GamePlayComponent}
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
