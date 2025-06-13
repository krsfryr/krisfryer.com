import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
    selector: 'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss'],
    standalone: false
})
export class WorkItemComponent {
  @Input() project = {} as Project;
}
