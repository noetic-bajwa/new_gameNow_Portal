import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
   Banners =[
    {src:"../../../assets/Banners/banner1.PNG"},
    {src:"../../../assets/Banners/banner2.PNG"},
    {src:"../../../assets/Banners/banner3.PNG"}
  ]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
