import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  projects = {} as Project[];

  constructor(private portfolioService: PortfolioService) {

  }
  ngOnInit(): void {
    this.projects = this.portfolioService.GetProjects();
  }
}
