import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Project } from '../../models/Project';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;

  constructor(private router: Router, private portfolioService: PortfolioService) {}

  ngOnInit() {    
    //this.router.navigateByUrl('/home');
    //this.featuredProject = this.portfolioService.GetProjectById(0);
  }

}
