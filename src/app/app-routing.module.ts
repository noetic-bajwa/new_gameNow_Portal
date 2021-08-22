import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeContentComponent } from './dashboard/home-content/home-content.component';

const routes: Routes = [
  { 
  path:'',component:DashboardComponent ,children:[
    {path:'',component:HomeContentComponent},
    { path: ':category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) }
    
    
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
