import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { PortfolioService } from '../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  
  //projects = {} as Project[];

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {
    console.log("work construct");

  }
  ngOnInit(): void {
    console.log("work");

    // this.projects = this.portfolioService.GetProjects();

    // this.route.paramMap.subscribe((params) => {
    //   let projectID = params.get('id');
    // })
  }
}
