import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthenticationGuard } from '../../authentication.guard';
declare let AOS: any;


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  
  
  Banners:any;
  // AllGames = ALLGAMES;
  
  constructor( private gamesData:DataService,private authService:AuthenticationGuard) { 
    
  }



  permission = this.authService.canActivate();
  ngOnInit(): void {
    AOS.init();
    console.log(this.permission);
    // this.gamesData.getData().subscribe(
    //   data=>{
    //   this.Games=data;
    //   console.log(data)
      
    //   },
    //   err=>{
       
    //   });
      
    

    
     };

    //  onClick(id:any){
    //    alert(id)
    //  }

     

  }


