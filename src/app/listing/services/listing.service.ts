import { Injectable } from '@angular/core';
import { Listing } from '../models/Listing';
import { asyncScheduler, BehaviorSubject, concatAll, from, Observable, scheduled } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
	private projects: Listing[] = [
    {
			slug: 'impartner-marketplace',
      title: 'Impartner Marketplace',
      subtitle: 'Impartner',
      summary: 'This is a sample summary description.',
      description: 'How might we create an engaging and easy-to-use applocation that gives users the ability to create and maintain their partner ecosystem?',
      link: 'work/impartner-marketplace',
      tags: ['Figma', 'MVP Design', 'Protyping', 'HTML', 'CSS', 'Mobile'],
      tagColor: 'tag-studio',
      pictures: ['../../assets/img/marketplace/mps-01.png'],
      cardColor: 'bg-studio',			
    },
    {
			slug: 'competency-management',
      title: 'Competency Management',
      subtitle: 'Impartner',
      summary: 'This is a sample summary description.',
      description: 'How might we enable PRM administrators to effectively manage and display account-level competencies in a flexible and customizable way that drives business success?',
      link: 'work/competency-management',
      tags: ['Figma', 'MVP Design', 'Protyping', 'HTML', 'CSS'],
      tagColor: 'tag-comptency',
      pictures: ['../../assets/img/competencies/competencies-dashboard.png'],
      cardColor: 'bg-comptency',
    },
    {
			slug: 'design-system',
      title: 'Design Systems',
      subtitle: 'Impartner',
      summary: 'This is a sample summary description.',
      description: 'How might we create a unified design system to reduce inconsistencies, improve efficiency, and ensure a cohesive user experience across all products at Impartner?',
      link: 'work/design-system',
      tags: ['Figma', 'MVP Design'],
      tagColor: 'tag-design-system',
      pictures: ['../../assets/img/design-system/prm/cover.png'],
      cardColor: 'bg-design-system',
    },
	]

	GetListings(top: number = 5): Observable<Listing[]> {
		return new BehaviorSubject<Listing[]>(this.projects.slice(0, 5)).asObservable();
	}
	
}