import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALLGAMES } from 'src/app/GAMES/allGames';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  AllGames = ALLGAMES;
  category:any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')
    })
   }

  ngOnInit(): void {

    
  }

}
