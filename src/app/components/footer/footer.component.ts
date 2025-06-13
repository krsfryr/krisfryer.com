import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {
  constructor(public themeService: ThemeService) {}
  currentYear = new Date().getFullYear(); // 2020

  onThemeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'light' | 'dark' | 'system';
    this.themeService.setTheme(value);
  }
}
