import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  projects: Project[] = [
    {
      id: 0,
      subtitle: 'Impartner',
      name: 'Impartner Marketplace',
      summary: 'This is a sample summary description.',
      description: 'This is a sample full description.',
      projectLink: '',
      tags: ['HTML', 'CSS'],
      pictures: [],
      viewMoreSrc: './assets/pages/impartner/marketplace-studio.html'
    },
    {
      id: 1,
      subtitle: '',
      name: 'Sample Project 2',
      summary: 'This is a sample summary description.',
      description: 'This is a sample full description.',
      projectLink: '',
      tags: ['Prototyping', 'Responsive', 'MVP Design'],
      pictures: [],
      viewMoreSrc: ''
    },
  ]

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches this id:' + id);
    }

    return project;
  }

}
