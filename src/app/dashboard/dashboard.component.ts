import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private pageTitle:Title) { 
    this.pageTitle.setTitle('GAME NOW - GAMING NEVER STOPS');
  }

  ngOnInit(): void {
  }

}
